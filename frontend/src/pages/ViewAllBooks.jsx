import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';


class ViewAllBooks extends Component {

    constructor(props){
        super(props);

        this.state={
            books:[]
        };
    }
    
    componentDidMount() {
        this.retriveBooks();
    }
    
    retriveBooks(){
        axios.get("http://localhost:8080/books").then(res => {
            if(res.data.success){
                this.setState({
                    books: res.data.existingBook
                });
            }
        });
    }

    filterData(books,searchKey){
        const result = books.filter((book) => 
            book.bookId.toLowerCase().includes(searchKey)||
            book.title.toLowerCase().includes(searchKey)||
            book.autherName.toLowerCase().includes(searchKey)
        )
        this.setState({books:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8080/books").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingBook,searchKey)
            }
        });
    }

    onDelete = (id) => {
        axios.delete('http://localhost:8080/book/' +id).then((res) => {
            alert('Book Deleted Successfully')
            this.retriveBooks();
        })
    }


    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3>MANAGE ALL BOOKS</h3>
                    <br></br>

                    <form className="row">
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search by : BookID, Title, Auther"
                                name="searchQuery"
                                onChange={this.handleSearchArea}>
                            </input>
                        </div>
                        <p>
                            Your Total Contacts: <strong>{this.state.books.length}</strong>
                        </p>
                    </form>
                    <br></br>

                    <table className="table table-hover" style ={{width: 1200}}>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Book ID</th>
                                <th>Title</th>
                                <th>Auther Name</th>
                                <th>Category</th>
                                <th>Count</th>
                                <th style ={{width: 170}}>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-secondary">
                            {this.state.books.map((books, index) => (
                                <tr key={index}>
                                    <td >{index+1}</td>
                                    <td>
                                        <a href={'/book/'+books._id} style={{ textDecoration: 'none' }}>
                                        {books.bookId}
                                        </a>
                                    </td>
                                    <td>{books.title}</td>
                                    <td>{books.autherName}</td>
                                    <td>{books.bCategory}</td>
                                    <td>{books.count}</td>
                                    <td>
                                        {/* <a className="btn btn-warning" href={'/edit/'+books._id}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="/#" onClick={() => this.onDelete(books._id)} >
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a> */}

                                        <Stack direction="row" spacing={2}>
                                            <IconButton aria-label="delete" color="error" onClick={() => this.onDelete(books._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <Link to={'/edit/'+books._id}>
                                                <IconButton aria-label="edit" color='secondary'>
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                        </Stack>
                                    </td>
                                    {/* <Link to="/" className="navbar-brand">{title}</Link> */}
                                </tr> 
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default ViewAllBooks;