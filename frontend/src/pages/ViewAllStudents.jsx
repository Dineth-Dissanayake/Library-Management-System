import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import generatePDFAllStudents from '../components/pdf/reportjeneratorStudent';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';


class ViewAllStudents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: []
        };
    }

    componentDidMount() {
        this.retriveStudents();
    }

    retriveStudents() {
        axios.get("http://localhost:8080/students").then(res => {
            if (res.data.success) {
                this.setState({
                    students: res.data.existingStudent
                });
            }
        });
    }

    filterData(students, searchKey) {
        const result = students.filter((students) =>
            students.regNumber.toLowerCase().includes(searchKey) ||
            students.NIC.toLowerCase().includes(searchKey) ||
            students.fullName.toLowerCase().includes(searchKey)
        )
        this.setState({ students: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8080/students").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingStudent, searchKey)
            }
        });
    }

    onDelete = (id) => {
        axios.delete('http://localhost:8080/student/' + id).then((res) => {
            alert('Student Deleted Successfully')
            this.retriveStudents();
        })
    }


    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3>MANAGE ALL STUDENTS</h3>
                    <br></br>

                    <form className="row">
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search by : StudentID, Name, NIC"
                                name="searchQuery"
                                onChange={this.handleSearchArea}>
                            </input>
                        </div>
                        <p>
                            All Student Count: <strong>{this.state.students.length}</strong>
                        </p>
                    </form>
                    <br></br>

                    <table className="table table-hover" style={{ width: 1000 }}>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Student ID</th>
                                <th>NIC</th>
                                <th>Faculty</th>
                                <th>Semester</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-secondary">
                            {this.state.students.map((students, index) => (
                                <tr key={index}>
                                    <td >{index + 1}</td>
                                    <td>
                                        <a href={'/student_details/' + students._id} style={{ textDecoration: 'none' }}>
                                            {students.fullName}
                                        </a>
                                    </td>
                                    <td>{students.regNumber}</td>
                                    <td>{students.NIC}</td>
                                    <td>{students.faculty}</td>
                                    <td>{students.semester}</td>
                                    <td>
                                        <Stack direction="row" spacing={2}>
                                            <IconButton aria-label="delete" color="error" onClick={() => this.onDelete(students._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <Link to={'/edit_student/' + students._id}>
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
                        <button style ={{margin:5,padding:5, marginBottom:40,marginLeft:10}} type="submit" className="btn btn-outline-primary" onClick={()=> {generatePDFAllStudents(this.state.students)}}><b>DOWNLOAD REPORT</b></button>
                    </div>

                </div>
            </>
        );
    }
}

export default ViewAllStudents;