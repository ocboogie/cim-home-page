import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';
import NFAAF from './questions/NFAAF.md';
import useAnonymousFunctions from './questions/useAnonymousFunctions.md';
import dataTypes from './questions/dataTypes.md';

export default {
    title: 'H6 Chapter 2 Intro JavaScript data types, operators, expressions. Week 3',
    id: 'h6',
    element: props => {
        const questions = [
            {
                title: 'What is the difference between a named function and anonymous function?',

                body: <MD md={NFAAF} />
            },
            {
                title: 'Why do we use anonymous functions?',

                body: <MD md={useAnonymousFunctions} />
            },
            {
                title: 'How do you check JavaScript errors in a browser?',

                body: 'There are several different ways to do this, like using an extension for example. The most universal way is ctrl+shift+i > console. The errors should be logged there.'
            },
            {
                title: 'JavaScript data types, What are the primary, composite and special JavaScript data types?',

                body: <MD md={dataTypes} />
            }
        ];
        const assignments = [
            {
                title: 'Complete digital.htm on pages 94-96.',
                body: <div><a href="assets/H6/digital">Here</a> is the link to the file</div>
            },
            {
                title: 'Complete hands on project 1-2.',
                body: <div><a href="assets/H6/HandsOnProject2-1">Here</a> is the link to the file</div>
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
