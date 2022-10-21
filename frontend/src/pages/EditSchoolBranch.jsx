import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

export default function EditSchoolBranch() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        branchName: ""
    });

    const { id } = useParams();

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]:value})
    };

    useEffect(() => {
        function getSchoolBranch(){
            axios.get('http://localhost:8080/schoolBranch/' +id).then((res) => {
                if(res.data.success){
                    setCredentials({
                        branchName:res.data.SchoolBranch.branchName,
                    });
                }
            })
        };

        getSchoolBranch();
    }, []);

    function updateData(e){
        e.preventDefault();

        const {branchName} = credentials;
        const data = {
            branchName: branchName
        }
        console.log(data);
        axios
        .put(`http://localhost:8080/schoolBranch/edit/`+id, data)
        .then((res) => {
            if(res.data.success){
                alert("Student branch updated successfully!")
                setCredentials(
                    {
                        branchName: ""
                    }
                )
                navigate("/view_school_branches");
            }
        })
    }

    return (
        <>
            <Sidebar />
            <div className='container'>
                <h3>UPDATE SCHOOL BRANCH</h3>

                <form>
                    <div className="col-md-6 mt-3">
                        <label className="col-form-label" htmlFor="inputDefault">Name of the school branch</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Branch name" 
                            name="branchName"
                            value={credentials.branchName}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <button type="button" className="btn btn-info mt-4"onClick={updateData}>UPDATE BRANCH</button>

                </form>
            </div>
        </>
    )
}

    

