import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

class AddBook extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3>ADD BOOK TO THE SYSTEM</h3>

                    <form>
                        <div className="col-md-6 mt-4">
                            <label class="col-form-label" for="inputDefault">Book ID</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                id="inputDefault" 
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Title Of The Book</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                id="inputDefault" 
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Autho's Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                id="inputDefault" 
                            />
                        </div>

                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Book Category</label>
                            <select name="markingSchemaName" className="form-select" >
                                <option>Choose...</option>
                                <option>Engineering</option>
                                <option>Computing</option>
                                <option>Business Management</option>
                            </select>
                        </div>

                        <div className="col-md-6 mt-3">
                            <label class="col-form-label" for="inputDefault">Book Count</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Default input" 
                                id="inputDefault" 
                            />
                        </div>

                        <div class="col-md-6 mt-1">
                            <label for="exampleTextarea" class="form-label mt-4">Example textarea</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3" spellcheck="false"></textarea>
                        </div>

                        <button type="button" class="btn btn-info mt-4">ADD BOOK</button>

                    </form>
                </div>
            </>
        );
    }
}

export default AddBook;