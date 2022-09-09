import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";

class AddCategory extends Component {

    constructor(props){
        super(props);
        this.state={
            categoryId: "",
            Category:""
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

        const {categoryId, Category} = this.state;
        const data = {
            categoryId : categoryId,
            Category : Category
        }
        console.log(data);

        axios.post("http://localhost:8080/category/add",data).then((res) => {
            if(res.data.success){
                alert("New Category Added Successfully!")
                // toast.success(`Category Added Successfully`);
                this.setState(
                    {
                        categoryId: "",
                        Category:""
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
                    <h3>ADD BOOKS CATEGORY</h3>

                    <form>
                        <div className="col-md-6 mt-4">
                            <label class="col-form-label" for="inputDefault">Category ID</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                name="categoryId"
                                value={this.state.categoryId}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Name Of The Category</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                name="Category"
                                value={this.state.Category}
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

export default AddCategory;
