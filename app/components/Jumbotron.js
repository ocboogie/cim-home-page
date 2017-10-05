import React, { Component } from 'react';

import style from './Jumbotron.css';

export default class Jumbotron extends Component {
    render() {
        const Title = (this.props.titleElement) ? this.props.titleElement : <h1 className="display-3">{this.props.title || ''}</h1>;
        return (
            <div className={`jumbotron ${style.container}`}>
                {Title}
                <p className="lead">{this.props.lead || ((this.props.children) ? <br /> : '')}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
