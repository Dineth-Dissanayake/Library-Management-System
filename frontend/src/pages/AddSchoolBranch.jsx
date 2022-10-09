import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";

class AddSchoolBranch extends Component {

    constructor(props){
        super(props);
        this.state={
            branchName: "",
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

        const {branchName} = this.state;
        const data = {
            branchName : branchName,
        }
        console.log(data);

        axios.post("http://localhost:8080/schoolBranch/add",data).then((res) => {
            if(res.data.success){
                alert("New school branch added successfully!")
                this.setState(
                    {
                        branchName: ""
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
                    <h3>ADD SCHOOL BRANCH</h3>

                    <form>
                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" htmlFor="inputDefault">Name of the school branch</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Branch name" 
                                name="branchName"
                                value={this.state.branchName}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <button type="button" class="btn btn-info mt-4"onClick={this.onSubmit}>ADD NEW BRANCH</button>

                    </form>
                </div>
            </>
        );
    }
}

export default AddSchoolBranch;
