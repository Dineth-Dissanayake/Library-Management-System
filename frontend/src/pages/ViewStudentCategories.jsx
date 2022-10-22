import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";

export default class ViewStudentCategories extends Component {
    constructor(props){
        super(props);

        this.state = {
            studentCategories:[]
        };
    }

    componentDidMount(){
        this.retrieveStudentCategories();
    }

    retrieveStudentCategories(){
        axios.get("http://localhost:8080/studentCategories").then(res => {
            if(res.data.success){
                this.setState({
                    studentCategories:res.data.existingStudentCategory
                });
                console.log(this.state.studentCategories);
            }
        });
    }

    onDelete = (id) =>{
        axios.delete('http://localhost:8080/studentCategory/delete/' +id).then(res =>{
            alert("Deleted Successfully!");
            this.retrieveStudentCategories();
        })
    }

    render() {
        return(
            <div>
                <Sidebar />
                <div className='container'>
                    <h3>STUDENT CATEGORIES</h3>
                    <div className='container-2'>
                        <button className='btn btn-success'><a href='/add_student_category' style={{textDecoration:"none", color:"white"}}>Create new category</a></button>
                    </div>
                    <table className='table'> 
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Maximum Packs</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.studentCategories.map((studentCategories,index) =>(
                                <tr key = {index}>
                                    <th scope='row'>{index+1}</th>
                                    <td>{studentCategories.categoryName}</td>
                                    <td>{studentCategories.maxAllowed}</td>
                                    <td>
                                        <a className="btn btn-warning" href={`/edit_student_category/${studentCategories._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="/#" onClick={() => this.onDelete(studentCategories._id)}>
                                        <i className="fa-solid fa-trash-can"></i>&nbsp;Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}