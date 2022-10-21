import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";


export default function EditCategory(){

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        categoryId: "",
        Category:""
    });

    const { id } = useParams();

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setCredentials({...credentials, [name]: value});
    };

    useEffect(() => {
        function getCategory() {
            axios.get('http://localhost:8080/category/' +id).then((res) => {
            if(res.data.success){
                setCredentials({
                    categoryId:res.data.category.categoryId,
                    Category:res.data.category.Category
                });
            }
            })
        };

        getCategory();
    }, []);

    
    function updateData(e){
        e.preventDefault();

        const {categoryId, Category} = credentials;
        const data = {
            categoryId: categoryId,
            Category: Category
        }
        console.log(data);
        axios
        .put(`http://localhost:8080/category/update/`+id, data)
        .then((res) => {
            if(res.data.success){
                alert("Category Updated Successfully!")
                setCredentials(
                    {
                        categoryId: "",
                        Category:""
                    }
                )
                navigate("/category_details");
            }
        })
    }
    
    return(
        <>
                <Sidebar />
                <div className='container'>
                    <h3>ADD BOOKS CATEGORY</h3>

                    <form>
                        <div className="col-md-6 mt-4">
                            <label class="col-form-label" for="inputDefault">Category ID</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                name="categoryId"
                                value={credentials.categoryId}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Name Of The Category</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                name="Category"
                                value={credentials.Category}
                                onChange={handleInputChange} 
                            />
                        </div>

                        <button type="button" class="btn btn-info mt-4"onClick={updateData}>UPDATE CATEGORY</button>

                    </form>
                </div>
            </>
    )
}