import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

export default {
    title: 'H8 Chapter 3 JavaScript Array Object and Control Structures, jQuery example Week 4',
    id: 'h8',
    element: props => {
        const assignments = [
            {
                title: 'Complete hands On Project 3-1 Page 205',
                body: <div><a href="assets/H8/calendar.html">Here</a> is the link to the file</div>
            },
            {
                title: 'Complete hands-on Project 3-4 Page 209',
                body: <div><a href="assets/H8/calendarjQuery.html">Here</a> is the link to the file</div>
            }
        ];

        const CardData = [
            {
                title: 'Assignments',
                body: <Collapse items={assignments} />
            }
        ];

        return (
            <div>
                <Cards data={CardData} />
            </div>
        );
    }
};
