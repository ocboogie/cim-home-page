import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from './Jumbotron';
import About from './About';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron title="Home page"><Link to="/assignments" className="btn btn-lg btn-success" role="button">Assignments</Link></Jumbotron>
                <About />
            </div>
        );
    }
}
