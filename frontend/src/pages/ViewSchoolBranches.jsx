import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";

export default class ViewSchoolBranches extends Component {
    constructor(props){
        super(props);

        this.state = {
            schoolBranches:[]
        };
    }

    componentDidMount(){
        this.retrieveSchoolBranches();
    }

    retrieveSchoolBranches(){
        axios.get("http://localhost:8080/schoolBranches").then(res => {
            if(res.data.success){
                 this.setState({
                    schoolBranches:res.data.existingSchoolBranch
                 });
                 console.log(this.state.schoolBranches);
            }
        });
    }

    onDelete = (id) =>{
        axios.delete('http://localhost:8080/schoolBranch/delete/' + id).then(res =>{
            alert("Deleted Successfully!");
            this.retrieveSchoolBranches();
        })
    }


  render() {
    return (
      <div>
        <Sidebar />
            <div className='container'>
                <h3>SCHOOL BRANCHES</h3>
                <div className='container-2'>
                    <button className="btn btn-success"><a href="/add_school_branch" style={{textDecoration:"none", color:"white"}}>Create new branch</a></button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Branch Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.schoolBranches.map((schoolBranches,index) =>(
                            <tr key = {index}>
                                <th scope="row">{index+1}</th>
                                <td>{schoolBranches.branchName}</td>
                                <td>
                                    <a className="btn btn-warning" href={`/edit_school_branch/${schoolBranches._id}`}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="/#" onClick={() => this.onDelete(schoolBranches._id)}>
                                    <i className="fa-solid fa-trash-can"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
      </div>
    )
  }
}
