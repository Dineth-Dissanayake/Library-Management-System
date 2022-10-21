import React, { Component } from 'react';
import axios from 'axios';
import generatePDFIssueBooks from '../components/pdf/repotejenaraterIssueBook';

import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";


class IssueBookDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            Issuebook:[]
        };
    }
    
    componentDidMount() {
        this.retriveIssueBooks();
    }
    
    retriveIssueBooks(){
        axios.get("http://localhost:8080/issuebook").then(res => {
            if(res.data.success){
                this.setState({
                    Issuebook: res.data.existingIssuebook
                });
            }
        });
    }

    filterData(Issuebook,searchKey){
        const result = Issuebook.filter((Issuebook) => 
        Issuebook.bookId.toLowerCase().includes(searchKey)||
        Issuebook.studentId.toLowerCase().includes(searchKey)
        )
        this.setState({Issuebook:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8080/issuebook").then(res => {
            if(res.data.success){
                this.filterData(res.data.existingIssuebook,searchKey)
            }
        });
    }

    


    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3>ALL ISSUED BOOKS DETAILS</h3>
                    <br></br>

                    <form className="row">
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search by : Book Id, Student ID"
                                name="searchQuery"
                                onChange={this.handleSearchArea}>
                            </input>
                        </div>
                        <p>
                            Total Issued Book: <strong>{this.state.Issuebook.length}</strong>
                        </p>
                    </form>
                    <br></br>

                    <table className="table table-hover" style ={{width: 1200}}>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Book Id</th>
                                <th>Student Id</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className="table-secondary">
                            {this.state.Issuebook.map((Issuebook, index) => (
                                <tr key={index}>
                                    <td >{index+1}</td>
                                    <td>{Issuebook.bookId}</td>
                                    <td>{Issuebook.studentId}</td>
                                    <td>{Issuebook.date}</td>
                                </tr> 
                            ))}
                        </tbody>
                    </table>
                    <br/>
                    <hr></hr>

                    <div className="btn-group" role="group" aria-label="Basic example"> 
                        <button style ={{margin:5,padding:5, marginBottom:40,marginLeft:10}} type="submit" className="btn btn-outline-primary" onClick={()=> {generatePDFIssueBooks(this.state.Issuebook)}}><b>DOWNLOAD REPORT</b></button>
                    </div>
                </div>
            </>
        );
    }
}

export default IssueBookDetails;