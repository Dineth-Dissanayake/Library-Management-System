import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";

class AddStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            faculty: "",
            semester: "",
            regNumber: "",
            NIC: "",
            contactNumber: "",
            address: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fullName, regNumber, NIC, faculty, semester, contactNumber, address } = this.state;
        const data = {
            fullName: fullName,
            regNumber: regNumber,
            NIC: NIC,
            faculty: faculty,
            semester: semester,
            contactNumber: contactNumber,
            address: address
        }

        axios.post("http://localhost:8080/Student/add", data).then((res) => {
            if (res.data.success) {
                alert("New Student Added Successfully!")
                // toast.success(`Student Added Successfully`);
                this.setState(
                    {
                        fullName: "",
                        regNumber: "",
                        NIC: "",
                        faculty: "",
                        semester: "",
                        contactNumber: "",
                        address: ""
                    }
                )
            }
        })
    }

    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3>ADD STUDENT TO THE SYSTEM</h3>
                
                    <form>
                        <div className="col-md-6 mt-4">
                            <label className="col-form-label" htmlFor="inputDefault">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter student's fullname"
                                name='fullName'
                                value={this.state.fullName}
                                onChange={this.handleInputChange} required/>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Student Registration Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter student's registration number"
                                name='regNumber'
                                value={this.state.regNumber}
                                onChange={this.handleInputChange} required/>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">NIC</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter NIC number here"
                                name='NIC'
                                value={this.state.NIC}
                                onChange={this.handleInputChange} required/>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Faculty</label>
                            <select
                                name="faculty"
                                className="form-select"
                                value={this.state.faculty}
                                onChange={this.handleInputChange} 
                            >
                                <option>Select faculty</option>
                                <option>Faculty of Engineering</option>
                                <option>Faculty of Computing</option>
                                <option>Faculty of Business Management</option>
                                <option>Faculty of Humanities and science</option>
                            </select>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Semester</label>
                            <select
                                name="semester"
                                className="form-select"
                                value={this.state.semester}
                                onChange={this.handleInputChange}
                            >
                                <option>Select semester</option>
                                <option>Year 1 semester 1</option>
                                <option>Year 1 semester 2</option>
                                <option>Year 2 semester 1</option>
                                <option>Year 2 semester 2</option>
                                <option>Year 3 semester 1</option>
                                <option>Year 3 semester 2</option>
                                <option>Year 4 semester 1</option>
                                <option>Year 4 semester 2</option>

                            </select>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Contact Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="071 234 5678"
                                name='contactNumber'
                                value={this.state.contactNumber}
                                onChange={this.handleInputChange} required/>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault"><address>Permant Address</address></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter student's perment address here"
                                name='address'
                                value={this.state.address}
                                onChange={this.handleInputChange} required/>
                        </div>


                        <button type="button" className="btn btn-info mt-4" onClick={this.onSubmit}>ADD STUDENT</button>

                    </form>
                </div>
            </>
        );
    }
}

export default AddStudent;