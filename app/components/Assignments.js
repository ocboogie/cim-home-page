import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import assignments from '../assignments';

import Jumbotron from './Jumbotron';

export default class Assignment extends Component {
    render() {
        const Assignments = [];
        for (const assignment of Object.values(assignments)) {
            Assignments.push(<Link key={assignment.id} to={`/assignments/${assignment.id}`} className="list-group-item list-group-item-action">{assignment.title}</Link>);
        }

        return (
            <div>
                <Jumbotron title="Assignments" />
                <div className="list-group">
                    {Assignments}
                </div>
            </div>
        );
    }
}
