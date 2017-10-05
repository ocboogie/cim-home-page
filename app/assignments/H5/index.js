import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import singleLineComment from './questions/singleLineComment.md';
import WIAEHF from './questions/WIAEHF.md';
import WIAI from './questions/WIAI.md';

export default {
    title: 'H5 Chapter 1 Intro JavaScript Week 3',
    id: 'h5',
    element: () => {
        const questions = [
            {
                title: 'What is a URL?',

                body: <div>URL stands for Uniform Resource Locator. A URL references a web resource. A url has three main parts protocol (<code>https</code>), hostname (<code>google.com</code>) and path (<code>/search</code>)</div>
            },
            {
                title: 'What does W3C stand for, what do they do?',

                body: 'W3C stands for World Wide Web Consortium. They decide what the standards are for the World Wide Web, For example they standardized HTML5'
            },
            {
                title: 'What is a 3 Tier Client/Server system?',

                body: 'A 3 tier client/server system is a client/server architecture, consisting of three parts; The client, the server and the database server'
            },
            {
                title: 'What is ECMAScript, why was it created?',

                body: 'ECMAScript is a scripting-language specification for the web. It was created to make the web more standardized'
            },
            {
                title: 'How do you create a single-line comment in JavaScript?',

                body: <MD md={singleLineComment} />
            },
            {
                title: 'What is an identifier?',

                body: <MD md={WIAI} />
            },
            {
                title: 'What is an event handler for?',

                body: <MD md={WIAEHF} />
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
