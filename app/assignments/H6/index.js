import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';
import NFAAF from './questions/NFAAF.md';

export default {
    title: 'H6 Chapter 2 Intro JavaScript data types, operators, expressions. Week 3',
    id: 'h6',
    element: props => {
        const questions = [
            {
                title: 'What is the difference between a named function and anonymous function.',

                body: <MD md={NFAAF} />
            }
        ];
        const assignments = [
            {
                title: 'Complete hands on project 1-1.',
                body: <div><a href="assets/H5/HandsOnProject1-1">Here</a> is the link to the file</div>
            },
            {
                title: 'Complete hands on project 1-2.',
                body: <div><a href="assets/H5/HandsOnProject1-2">Here</a> is the link to the file</div>
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
