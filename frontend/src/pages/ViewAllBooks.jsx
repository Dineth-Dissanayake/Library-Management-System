import React,{useEffect, useContext, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import ToastContext from '../context/ToastContext';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import generatePDFLibraryBooks from '../components/pdf/repotejenaraterBook';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';


const ViewAllBooks = () => {

    const {toast} = useContext(ToastContext);

    const [credentials, setCredentials] = useState({
        books:[]
    });

    useEffect(() => {
        getBooks();
    }, []);

    function getBooks() {
        axios.get('http://localhost:8080/books').then((res) => {
        if(res.data.success){
            setCredentials({
                books: res.data.existingBook
            });
        }
        })
        .catch((_err) => {
            toast.error("Data not fetching!");
        });
    };

    const filterData = (books,searchKey) => {
        const result = books.filter((book) => 
            book.bookId.toLowerCase().includes(searchKey)||
            book.title.toLowerCase().includes(searchKey)||
            book.autherName.toLowerCase().includes(searchKey)
        )
        setCredentials({books:result})
    };

    const handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8080/books").then(res => {
            if(res.data.success){
                filterData(res.data.existingBook,searchKey)
            }
        });
    };

    const onDelete = (id) => {
        axios.delete('http://localhost:8080/book/' +id).then((res) => {
            toast.success('Book Deleted Successfully')
            getBooks();
        })
    };

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
                            onChange={handleSearchArea}>
                        </input>
                    </div>
                    <p>
                        Total Books: <strong>{credentials.books.length}</strong>
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
                        {credentials.books.map((books, index) => (
                            <tr key={index}>
                                <td >{index+1}</td>
                                <td>
                                    <a href={'/book_details/'+books._id} style={{ textDecoration: 'none' }}>
                                    {books.bookId}
                                    </a>
                                </td>
                                <td>{books.title}</td>
                                <td>{books.autherName}</td>
                                <td>{books.bCategory}</td>
                                <td>{books.count}</td>
                                <td>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton aria-label="delete" color="error" onClick={() => onDelete(books._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <Link to={'/edit_book/'+books._id}>
                                            <IconButton aria-label="edit" color='secondary'>
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                    </Stack>
                                </td>
                            </tr> 
                        ))}
                    </tbody>
                </table>

                <br/>
                <hr></hr>

                <div className="btn-group" role="group" aria-label="Basic example"> 
                    <button style ={{margin:5,padding:5, marginBottom:40,marginLeft:10}} type="submit" className="btn btn-outline-primary" onClick={()=> {generatePDFLibraryBooks(credentials.books)}}><b>DOWNLOAD REPORT</b></button>
                </div>

            </div>
        </>
    );
};

export default ViewAllBooks;