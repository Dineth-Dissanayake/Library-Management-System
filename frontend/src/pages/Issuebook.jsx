import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";
// import ToastContext from '../context/ToastContext';

class IssueBook extends Component {
    

    

    constructor(props){
        super(props);
        this.state={
            studentId: "",
            bookId:"",
            date:""
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

        const {studentId, bookId, date} = this.state;
        const data = {
            studentId: studentId,
            bookId: bookId,
            date: date
        }
        console.log(data);

        axios.post("http://localhost:8080/issuebook/add",data).then((res) => {
            if(res.data.success){
                alert("Issue Book Details Added Successfully!")
                // toast.success(`Issue Book Details Added Successfully`);
                this.setState(
                    {
                        studentId: "",
                        bookId:"",
                        date:""
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
                    <h3>ISSUE BOOK DETAILS</h3>

                    <form>
                        <div className="col-md-6 mt-4">
                            <label className="col-form-label" htmlFor="inputDefault">Student ID</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='studentId'
                                value={this.state.studentId}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-4">
                            <label className="col-form-label" htmlFor="inputDefault">BooK ID</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='bookId'
                                value={this.state.bookId}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-4">
                            <label className="col-form-label" htmlFor="inputDefault">Issue Date</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='date'
                                value={this.state.date}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="button" className="btn btn-info mt-4" onClick={this.onSubmit}>ISSUE A NEW BOOK</button>

                    </form>
                </div>
            </>
        );
    }
}

export default IssueBook;