import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';
import bonusPoints from './questions/bonusPoints.md';

export default {
    title: 'H9 Chapter 3 Extra Assignments Week 4',
    id: 'h9',
    element: props => {
        const assignments = [
            {
                title: 'Complete hands On Project 3-1 Page 205',
                body: <div><a href="assets/H9/HandsOnProject3-1/index.html">Here</a> is the link to the file</div>
            },
            {
                title: 'Complete hands-on Project 3-4 Page 209',
                body: <div><a href="assets/H9/HandsOnProject3-2/index.html">Here</a> is the link to the file</div>
            },
            {
                title: 'Bonus points translate Project3-1 and 3-4 to jQuery, Add to (sic) items to the menu items in Project 3-1. ',
                body: <MD md={bonusPoints} />
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
