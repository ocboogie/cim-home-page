import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import traverse from './questions/traverse.md';
import manipulation from './questions/manipulation.md';
import animation from './questions/manipulation.md';
import contrast from './questions/contrast.md';

export default {
    title: 'J1 Chapter 12 Introduction to jQuery',
    id: 'j1',
    element: () => {
        const questions = [
            {
                title: 'What is the difference between the object jQuery and $?',

                body: 'There is no difference. "$" is a reference to "jQuery".'
            },
            {
                title: 'List and describe three jQuery methods used to traverse the DOM.',

                body: <MD md={traverse} />
            },
            {
                title: 'List and describe three jQuery DOM manipulation methods.',

                body: <MD md={manipulation} />
            },
            {
                title: 'List and describe two jQuery animation methods.',

                body: <MD md={animation} />
            },
            {
                title: 'What are the advantages of jQuery 1.12.4?',

                body: 'The main difference is jQuery 1.12.4 is the last version that supports jQueryUI'
            },
            {
                title: 'Compare and contrast methods: addClass(), show(), and css("display", "block")?',

                body: <MD md={contrast} />
            }
        ];
        const assignments = [
            {
                title: 'Complete the books rocks1.htm example.',
                body: <div><a href="assets/J1/Chapter/rocks.html">Here</a> is the link to the file</div>
            },
            {
                title: 'Complete textbooks page 834-836 Hands-on-project 12-2.',
                body: <div><a href="assets/J1/HandsOnProject12-2">Here</a> is the link to the file</div>
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
