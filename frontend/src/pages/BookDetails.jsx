import React,{useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import ToastContext from '../context/ToastContext';
import Sidebar from '../components/sidebar/Sidebar';
import "./Main.css";


const BookDetails = () => {
    
    const {toast} = useContext(ToastContext);
    const [credentials, setCredentials] = useState("");
    const { id } = useParams();

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
    

    return (
        <>
            <Sidebar />
            <div className='container'>
                <h3>FULL BOOK DETAILS OF : {credentials.bookId}</h3>
                <br></br><hr></hr><br></br>

                <dl class="row" style ={{width: 1200}}>
                    <dt className="col-sm-3">BOOK ID :</dt>
                    <dd className="col-sm-9">{credentials.bookId}</dd>

                    <dt className="col-sm-3">TITLE :</dt>
                    <dd className="col-sm-9">{credentials.title}</dd>

                    <dt className="col-sm-3">AUTHER NAME :</dt>
                    <dd className="col-sm-9">{credentials.autherName}</dd>

                    <dt className="col-sm-3">BOOK CATEGORY :</dt>
                    <dd className="col-sm-9">{credentials.bCategory}</dd>

                    <dt className="col-sm-3">BOOK'S COUNT :</dt>
                    <dd className="col-sm-9">{credentials.count}</dd>

                    <dt className="col-sm-3">DESCRIPTION :</dt>
                    <dd className="col-sm-9">{credentials.description}</dd>
                </dl>
                <br/><br/><br/><br/>
            </div>
        </>
    );
};

export default BookDetails;