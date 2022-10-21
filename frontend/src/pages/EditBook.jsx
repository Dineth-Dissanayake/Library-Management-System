import React,{useEffect, useContext, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import ToastContext from '../context/ToastContext';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";


export default function EditBook(){

    const {toast} = useContext(ToastContext);
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        bookId: "",
        title:"",
        autherName:"",
        bCategory:"",
        count:"",
        description:""
    });

    const { id } = useParams();

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setCredentials({...credentials, [name]: value});
    };

    useEffect(() => {
        function getBook() {
            axios.get('http://localhost:8080/book/' +id).then((res) => {
            if(res.data.success){
                setCredentials({
                    bookId:res.data.book.bookId,
                    title:res.data.book.title,
                    autherName:res.data.book.autherName,
                    bCategory:res.data.book.bCategory,
                    count:res.data.book.count,
                    description:res.data.book.description
                });
            }
            })
            .catch((_err) => {
                toast.error("Data not fetching!");
            });
        };

        getBook();
    }, []);

    
    function updateData(e){
        e.preventDefault();

        const {bookId,title,autherName,bCategory,count,description} = credentials;
        const data = {
            bookId:bookId,
            title:title,
            autherName:autherName,
            bCategory:bCategory,
            count:count,
            description:description
        }
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
        console.log(data);
        axios
        .put(`http://localhost:8080/book/update/`+id, data)
        .then((res) => {
            if(res.data.success){
                toast.success("Book Updated Successfully!")
                setCredentials(
                    {
                        bookId: "",
                        title:"",
                        autherName:"",
                        bCategory:"",
                        count:"",
                        description:""
                    }
                )
                navigate("/manage_books");
            }
        })
        .catch((_err) => {
            toast.error("Database Error");
        });
    }
    
    return(
        <>
            <Sidebar />
            <div className='container'>
                <h3>EDIT BOOK IN THE SYSTEM</h3>

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

                    <button type="button" className="btn btn-info mt-4" onClick={updateData}>UPDATE BOOK</button>

                </form>
            </div>
        </>
    )
}