import React, { Component } from 'react';

import assignments from '../assignments';
import Jumbotron from './Jumbotron';

export default class Assignment extends Component {
    render() {
        const { assignmentId } = this.props.match.params;
        const assignment = assignments[assignmentId];
        const AssignmentElement = assignment.element;
        
        return (
            <div>
                <Jumbotron titleElement={<h1 className="display-5">{assignment.title}</h1>} />
                <AssignmentElement />
            </div>
        );
    }
}