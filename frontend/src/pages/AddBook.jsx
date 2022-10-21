import { useState, useContext } from 'react';

import AuthContext from '../context/AuthContext';
import ToastContext from '../context/ToastContext';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";

const AddBook = () => {

    const {toast} = useContext(ToastContext);
    const {addBook} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        bookId: "",
        title:"",
        autherName:"",
        bCategory:"",
        count:"",
        description:""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setCredentials({...credentials, [name]: value});
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(
            !credentials.bookId ||
            !credentials.title ||
            !credentials.autherName ||
            !credentials.bCategory ||
            !credentials.count ||
            !credentials.description
            ) {
            toast.error("Please enter all required fields!");
            return;
        }
        addBook(credentials);

        setCredentials({
            bookId: "",
            title:"",
            autherName:"",
            bCategory:"",
            count:"",
            description:""
        });
    };

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
                            placeholder="Bxxx" 
                            name='bookId'
                            value={credentials.bookId}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-md-6 mt-3">
                        <label className="col-form-label" htmlFor="inputDefault">Title Of The Book</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Book Title" 
                            name='title'
                            value={credentials.title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-md-6 mt-3">
                        <label className="col-form-label" htmlFor="inputDefault">Author's Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Author Name" 
                            name='autherName' 
                            value={credentials.autherName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-md-6 mt-3">
                        <label className="col-form-label" htmlFor="inputDefault">Book Category</label>
                        <select 
                            name="bCategory" 
                            className="form-select"
                            value={credentials.bCategory}
                            onChange={handleInputChange} 
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
                            placeholder="XX" 
                            name='count' 
                            value={credentials.count}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-md-6 mt-1">
                        <label htmlFor="exampleTextarea" className="form-label mt-4">Description</label>
                        <textarea 
                            className="form-control"
                            placeholder="Enter Book Description"  
                            name='description'
                            rows="3" 
                            spellCheck="false"
                            value={credentials.description}
                            onChange={handleInputChange}
                        >
                        </textarea>
                    </div>

                    <button type="button" className="btn btn-info mt-4" onClick={onSubmit}>ADD BOOK</button>

                </form>
            </div>
        </>
    );
};

export default AddBook;