import React, { Component } from 'react';
import { Link  } from "react-router-dom";

import Sidebar from '../components/sidebar/Sidebar';

import FindBook from './Home_Librarian/FindBook.png';
import IssueBook from './Home_Librarian/IssueBook.png';
import FindStudent from './Home_Librarian/FindStudent.png';

class LibrarianHome extends Component {

    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3><mark>Online Library Management System</mark></h3>

                    <button style={{marginTop:75}}>
                        <Link to="/manage_books">
                            <img src={FindBook} alt="home_image" style ={{width:175, height:200}} />
                        </Link>
                    </button>

                    <button style={{marginTop:75, marginLeft:100}}>
                        <Link to="/issued_books_details">
                            <img src={IssueBook} alt="home_image" style ={{width:185, height:200}} />
                        </Link>
                    </button>

                    <button style={{marginTop:75, marginLeft:100}}>
                        <Link to="/all_students">
                            <img src={FindStudent} alt="home_image" style ={{width:180, height:200}} />
                        </Link>
                    </button>
                </div>
            </>
        );
    }
}

export default LibrarianHome;