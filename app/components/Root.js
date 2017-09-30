import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import style from './Root.css';
import Navbar from './Navbar';

export default class Root extends Component {
    render() {
        return (
            <div>
            <div className={"container " + style.container}>
                <Navbar />
                {this.props.children}
            </div>
            </div>
        );
    }
}