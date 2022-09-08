import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

class AddBook extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <h6>This is Book Add Page</h6>
            </>
        );
    }
}

export default AddBook;