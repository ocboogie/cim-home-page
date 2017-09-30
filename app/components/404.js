import React, { Component } from 'react';

import Navbar from './Navbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>404! Web page not found</h1>
            </div>
        );
    }
}