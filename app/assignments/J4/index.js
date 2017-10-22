import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import describeFive from './questions/describeFive.md';
import animationMethods from './questions/animationMethods.md';

export default {
    title: 'J4 (formerly H13) jQuery Methods and Events',
    id: 'j4',
    element: () => {
        const questions = [
            {
                title: 'List and briefly describe five jQuery/JavaScript events.',

                body: <MD md={describeFive} />
            },
            {
                title: 'List and briefly describe four jQuery animation methods (this was done previously).',

                body: <MD md={animationMethods} />
            }
        ];
        const assignments = [
            {
                title: 'Create a form block that allows the user to enter their info.',
                body: <div><a href="assets/H14/form.html">Here</a> is the link to the file</div>
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
