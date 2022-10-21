import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";


export default function UpdateStudent(){

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        fullName: "",
        regNumber: "",
        NIC: "",
        faculty: "",
        semester: "",
        contactNumber: "",
        address: ""
    });

    const { id } = useParams();

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setCredentials({...credentials, [name]: value});
    };

    useEffect(() => {
        function getStudent() {
            axios.get('http://localhost:8080/student/' +id).then((res) => {
            if(res.data.success){
                setCredentials({
                    fullName: res.data.student.fullName,
                    regNumber: res.data.student.regNumber,
                    NIC: res.data.student.NIC,
                    faculty: res.data.student.faculty,
                    semester: res.data.student.semester,
                    contactNumber: res.data.student.contactNumber,
                    address: res.data.student.address
                });
            }
            })
        };

        getStudent();
    }, []);

    
    function updateData(e){
        e.preventDefault();

        const {fullName, regNumber, NIC, faculty, semester, contactNumber, address} = credentials;
        const data = {
            fullName: fullName,
            regNumber: regNumber,
            NIC: NIC,
            faculty: faculty,
            semester: semester,
            contactNumber: contactNumber,
            address: address
        }
        if(
            !credentials.fullName ||
            !credentials.regNumber ||
            !credentials.NIC ||
            !credentials.faculty ||
            !credentials.semester ||
            !credentials.contactNumber||
            !credentials.address
            ) {
            alert("Please enter all required fields!");
            return;
        }
        console.log(data);
        axios
        .put(`http://localhost:8080/student/update/`+id, data)
        .then((res) => {
            if(res.data.success){
                alert("Student Updated Successfully!")
                setCredentials(
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
                navigate("/all_students");
            }
        })
    }
    
    return(
        <>
            <Sidebar />
            <div className='container'>
                <h3>UPDATE STUDENT DETAILS IN THE SYSTEM</h3>

                <form>
                <div className="col-md-6 mt-4">
                    <label className="col-form-label" htmlFor="inputDefault">Student ID</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="IT********"
                    name='regNumber'
                    value={credentials.regNumber}
                    onChange={handleInputChange}
                    required />
                </div>

                <div className="col-md-6 mt-3">
                    <label className="col-form-label" htmlFor="inputDefault">Student Name</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter student's fullname"
                    name='fullName'
                    value={credentials.fullName}
                    onChange={handleInputChange} required />
                </div>

                <div className="col-md-6 mt-3">
                    <label className="col-form-label" htmlFor="inputDefault">Student Registration Number</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter student's registration number"
                    name='regNumber'
                    value={credentials.regNumber}
                    onChange={handleInputChange} required />
                </div>

                <div className="col-md-6 mt-3">
                    <label className="col-form-label" htmlFor="inputDefault">NIC</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter NIC number here"
                    name='NIC'
                    value={credentials.NIC}
                    onChange={handleInputChange} required />
                </div>

                <div className="col-md-6 mt-3">
                    <label className="col-form-label" htmlFor="inputDefault">Faculty</label>
                    <select
                    name="faculty"
                    className="form-select"
                    value={credentials.faculty}
                    onChange={handleInputChange}
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
                    value={credentials.semester}
                    onChange={handleInputChange}
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
                    value={credentials.contactNumber}
                    onChange={handleInputChange} required />
                </div>

                <div className="col-md-6 mt-3">
                    <label className="col-form-label" htmlFor="inputDefault"><address>Permant Address</address></label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter student's perment address here"
                    name='address'
                    value={credentials.address}
                    onChange={handleInputChange} required />
                </div>


                <button type="button" className="btn btn-info mt-4" onClick={updateData}>UPDATE STUDENT</button>

                </form>
            </div>
        </>
    )
}