import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";

class AddStudentCategory extends Component {

    constructor(props){
        super(props);
        this.state={
            categoryName: "",
            maxAllowed:""
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {categoryName, maxAllowed} = this.state;
        const data = {
            categoryName : categoryName,
            maxAllowed : maxAllowed
        }
        console.log(data);

        axios.post("http://localhost:8080/studentCategory/add",data).then((res) => {
            if(res.data.success){
                alert("New student category added successfully!")
                // toast.success(`Student category added successfully`);
                this.setState(
                    {
                        categoryName: "",
                        maxAllowed: ""
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
                    <h3>ADD STUDENT CATEGORY</h3>

                    <form>
                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Category name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Category Name" 
                                name="categoryName"
                                value={this.state.categoryName}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Number of maximum allowed students</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Add number" 
                                name="maxAllowed"
                                value={this.state.maxAllowed}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <button type="button" class="btn btn-info mt-4"onClick={this.onSubmit}>ADD NEW CATEGORY</button>

                    </form>
                </div>
            </>
        );
    }
}

export default AddStudentCategory;
