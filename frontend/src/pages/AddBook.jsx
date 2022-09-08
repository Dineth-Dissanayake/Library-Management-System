import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";
import axios from "axios";
// import ToastContext from '../context/ToastContext';

class AddBook extends Component {
    

    

    constructor(props){
        super(props);
        this.state={
            bookId: "",
            title:"",
            autherName:"",
            bCategory:"",
            count:"",
            description:""
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

        const {bookId, title, autherName, bCategory, count, description} = this.state;
        const data = {
            bookId: bookId,
            title: title,
            autherName: autherName,
            bCategory: bCategory,
            count: count,
            description: description
        }
        console.log(data);

        axios.post("http://localhost:8080//book/add",data).then((res) => {
            if(res.data.success){
                alert("New Added Successfully!")
                // toast.success(`Book Added Successfully`);
                this.setState(
                    {
                        bookId: "",
                        title:"",
                        autherName:"",
                        bCategory:"",
                        count:"",
                        description:""
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
                    <h3>ADD BOOK TO THE SYSTEM</h3>

                    <form>
                        <div className="col-md-6 mt-4">
                            <label className="col-form-label" htmlFor="inputDefault">Book ID</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='bookId'
                                value={this.state.bookId}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Title Of The Book</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='title'
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Author's Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='autherName' 
                                value={this.state.autherName}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Book Category</label>
                            <select 
                                name="bCategory" 
                                className="form-select"
                                value={this.state.bCategory}
                                onChange={this.handleInputChange} 
                            >
                                <option>Choose...</option>
                                <option>Engineering</option>
                                <option>Computing</option>
                                <option>Business Management</option>
                            </select>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label className="col-form-label" htmlFor="inputDefault">Book Count</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Default input" 
                                name='count' 
                                value={this.state.count}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mt-1">
                            <label htmlFor="exampleTextarea" className="form-label mt-4">Example textarea</label>
                            <textarea 
                                className="form-control" 
                                name='description'
                                rows="3" 
                                spellCheck="false"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                            >
                            </textarea>
                        </div>

                        <button type="button" className="btn btn-info mt-4" onClick={this.onSubmit}>ADD BOOK</button>

                    </form>
                </div>
            </>
        );
    }
}

export default AddBook;