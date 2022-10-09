import axios from 'axios';
import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

export default class EditSchoolBranch extends Component {
    constructor(props){
        super(props);
        this.state={
            branchName: ""
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
        let id = this.params.id;
        const {branchName} = this.state;
        const data = {
            branchName : branchName
        }
        console.log(data);

        axios.put(`http://localhost:8080/schoolBranch/edit/${id}`,data).then((res) => {
            if(res.data.success){
                alert("Branch updated successfully!")
                this.setState(
                    {
                        branchName: ""
                    }
                );
            }
        });
    }

    componentDidMount(){
        let id = this.params.id;
        console.log(id);
        axios.get(`http://localhost:8080/schoolBranch/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    branchName:res.data.SchoolBranch.branchName
                });
                console.log(this.state.SchoolBranch);
            }
        });
    }

    render() {
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
                                value={this.state.branchName}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <button type="button" className="btn btn-info mt-4"onClick={this.onSubmit}>UPDATE BRANCH</button>

                    </form>
                </div>
            </>
        );
    }
}
