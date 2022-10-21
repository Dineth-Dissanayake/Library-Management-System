import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

export default function EditStudentCategory() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        categoryName: "",
        maxAllowed:""
    });

    const { id } = useParams();

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]:value})
    };

    useEffect(() => {
        function getStudentCategory(){
            axios.get('http://localhost:8080/studentCategory/' +id).then((res) => {
                if(res.data.success){
                    setCredentials({
                        categoryName:res.data.StudentCategory.categoryName,
                        maxAllowed:res.data.StudentCategory.maxAllowed
                    });
                }
            })
        };

        getStudentCategory();
    }, []);

    function updateData(e){
        e.preventDefault();

        const {categoryName, maxAllowed} = credentials;
        const data = {
            categoryName: categoryName,
            maxAllowed: maxAllowed
        }
        console.log(data);
        axios
        .put(`http://localhost:8080/studentCategory/edit/`+id, data)
        .then((res) => {
            if(res.data.success){
                alert("Student branch updated successfully!")
                setCredentials(
                    {
                        categoryName: "",
                        maxAllowed:""
                    }
                )
                navigate("/view_student_categories");
            }
        })
    }

    return (
        <>
            <Sidebar />
            <div className='container'>
                <h3>UPDATE STUDENT CATEGORY</h3>

                <form>
                    <div className="col-md-6 mt-3">
                        <label class="col-form-label" for="inputDefault">Category name</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Category Name" 
                            name="categoryName"
                            value={credentials.categoryName}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="col-md-6 mt-3">
                        <label class="col-form-label" for="inputDefault">Number of maximum allowed students</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Add number" 
                            name="maxAllowed"
                            value={credentials.maxAllowed}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <button type="button" class="btn btn-info mt-4"onClick={updateData}>UPDATE CATEGORY</button>

                </form>
            </div>
        </>
    )
}

    

