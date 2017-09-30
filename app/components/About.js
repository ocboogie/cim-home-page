import React, { Component } from 'react';

import style from './About.css';

export default class About extends Component {
    render() {
        return (
            <div className={style.container}>
                <h1>About</h1>
                <p className="lead">This is a static web page made by Eamon "Boogie" Mikulec, made using the following technologies:</p>
                <ul>
                    <li>HTML, css, markdown and Javascript</li>
                    <li><a href="https://facebook.github.io/react/">React</a> for the user interface</li>
                    <li><a href="https://v4-alpha.getbootstrap.com/">Bootstrap v4</a> for the front-end framework</li>
                    <li><a href="https://reacttraining.com/react-router/">React Router v4</a> for the routing</li>
                    <li><a href="https://webpack.js.org/">Webpack v2</a> for the bundling</li>
                </ul>
            </div>
        );
    }
}