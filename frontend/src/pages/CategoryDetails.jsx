import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';


class CategoryDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            category:[]
        };
    }
    
    componentDidMount() {
        this.retriveCategory();
    }
    
    retriveCategory(){
        axios.get("http://localhost:8080/category").then(res => {
            if(res.data.success){
                this.setState({
                    category: res.data.existingCategory
                });
            }
        });
    }

    filterData(category,searchKey){
        const result = category.filter((category) => 
        category.categoryId.toLowerCase().includes(searchKey)||
        category.Category.toLowerCase().includes(searchKey)
        )
        this.setState({category:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8080/category").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingCategory,searchKey)
            }
        });
    }

    onDelete = (id) => {
        axios.delete('http://localhost:8080/category/' +id).then((res) => {
            alert('Category Deleted Successfully')
            this.retriveCategory();
        })
    }


    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3>MANAGE ALL Categories</h3>
                    <br></br>

                    <form className="row">
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search by : CategoryID, CategoryName"
                                name="searchQuery"
                                onChange={this.handleSearchArea}>
                            </input>
                        </div>
                        <p>
                            Total Catgory: <strong>{this.state.category.length}</strong>
                        </p>
                    </form>
                    <br></br>

                    <table className="table table-hover" style ={{width: 1200}}>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Category ID</th>
                                <th>Category Name</th>
                                <th style ={{width: 170}}>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-secondary">
                            {this.state.category.map((category, index) => (
                                <tr key={index}>
                                    <td >{index+1}</td>
                                    <td>{category.categoryId}</td>
                                    <td>{category.Category}</td>
                                    <td>
                                        <Stack direction="row" spacing={2}>
                                            <IconButton aria-label="delete" color="error" onClick={() => this.onDelete(category._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <Link to={'/edit_category/'+category._id}>
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
                </div>
            </>
        );
    }
}

export default CategoryDetails;