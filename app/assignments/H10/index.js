import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import windowAlert from './questions/windowAlert.md';
import consoleObject from './questions/consoleObject.md';
import RWD from './questions/RWD.md';

export default {
    title: 'H10 Chapter 4 Debugger & Array Review',
    id: 'h10',
    element: () => {
        const questions = [
            {
                title: 'How is window.alert useful in debugging?',

                body: <MD md={windowAlert} />
            },
            {
                title: 'What is console.log Object and Method?',

                body: <MD md={consoleObject} />
            },
            {
                title: 'Using Chrome, Firefox web Developer and Dreamweaver briefly outline ways to test RWD designs?',

                body: <MD md={RWD} />
            }
        ];
        const assignments = [
            {
                title: '11 random integers.',
                body: <div><a href="assets/H10/randomInteger.html">Here</a> is the link to the file</div>
            }
        ];

        const CardData = [
            {
                title: 'Questions',
                body: <Collapse items={questions} />
            },
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
