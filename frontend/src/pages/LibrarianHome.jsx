import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

class LibrarianHome extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h4>This Librarian Home page</h4>
                </div>
            </>
        );
    }
}

export default LibrarianHome;