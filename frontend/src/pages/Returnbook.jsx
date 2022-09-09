import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";
// import ToastContext from '../context/ToastContext';

class ReturnBook extends Component {
    

    

    constructor(props){
        super(props);
        this.state={
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

        const {bookId, date} = this.state;
        const data = {
            bookId: bookId,
            date: date
        }
        console.log(data);

        axios.post("http://localhost:8080/returnbook/add",data).then((res) => {
            if(res.data.success){
                alert("Return Book Details Added Successfully!")
                // toast.success(`Return Book Details Added Successfully`);
                this.setState(
                    {
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
                    <h3>RETURN BOOK TO THE SYSTEM</h3>

                    <form>
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
                            <label className="col-form-label" htmlFor="inputDefault">RETURN Date</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='date'
                                value={this.state.date}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="button" className="btn btn-info mt-4" onClick={this.onSubmit}>RETURN BOOK</button>

                    </form>
                </div>
            </>
        );
    }
}

export default ReturnBook;