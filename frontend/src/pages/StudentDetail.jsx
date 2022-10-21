import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

const StudentDetail = () => {
    
    const [credentials, setCredentials] = useState("");
    const { id } = useParams();

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
    

    return (
        <>
            <Sidebar />
            <div className='container'>
                <h3>FULL STUDENT DETAILS</h3>
                <br></br><hr></hr><br></br>

                <dl class="row" style ={{width: 1200}}>
                    <dt className="col-sm-3">FULL NAME :</dt>
                    <dd className="col-sm-9">{credentials.fullName}</dd>

                    <dt className="col-sm-3">REGISTRATION NUMBER :</dt>
                    <dd className="col-sm-9">{credentials.regNumber}</dd>

                    <dt className="col-sm-3">NIC :</dt>
                    <dd className="col-sm-9">{credentials.NIC}</dd>

                    <dt className="col-sm-3">FACULTY :</dt>
                    <dd className="col-sm-9">{credentials.faculty}</dd>

                    <dt className="col-sm-3">SEMESTER :</dt>
                    <dd className="col-sm-9">{credentials.semester}</dd>

                    <dt className="col-sm-3">CONTACT NUMBER :</dt>
                    <dd className="col-sm-9">{credentials.contactNumber}</dd>

                    <dt className="col-sm-3">ADDRESS :</dt>
                    <dd className="col-sm-9">{credentials.address}</dd>
                </dl>
                <br/><br/><br/><br/>
            </div>
        </>
    );
};

export default StudentDetail;