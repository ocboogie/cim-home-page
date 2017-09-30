import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import style from './Navbar.css';

class Navbar extends Component {
    render() {
        const pathname = this.props.location.pathname;
        return (
            <div className={"header clearfix " + style.container}>
                <nav>
                    <ul className="nav nav-pills float-right">
                        <li className="nav-item">
                            <Link to="/" className={"nav-link" + ((pathname === '/') ? ' active' : '')}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/assignments" className={"nav-link" + ((pathname === '/assignments') ? ' active' : '')}>Assignments</Link>
                        </li>
                    </ul>
                </nav>
                <h3 className="text-muted">Boogie's web page</h3>
            </div>
        );
    }
}

export default withRouter(props => <Navbar {...props} />)