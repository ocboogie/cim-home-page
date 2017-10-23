import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import prependAppend from './questions/prependAppend.md';
import firstAndLast from './questions/firstAndLast.md';
import minifyClosureCompiling from './questions/minifyClosureCompiling.md';
import advantageCDN from './questions/advantageCDN.md';

export default {
    title: 'J2 Intro to jQuery - jQuery Tag/ID Selectors & JavaScript onclick event review',
    id: 'j2',
    element: () => {
        const questions = [
            {
                title: 'What is the difference between the jQuery DOM manipulation methods prepend and append.',

                body: <MD md={prependAppend} />
            },
            {
                title: 'Using jQuery sizzle how would you select the first and last paragraph element on a page.',

                body: <MD md={firstAndLast} />
            },
            {
                title: 'What is minify, and closure compiling?',

                body: <MD md={minifyClosureCompiling} />
            },
            {
                title: 'Should you download and use a local copy of jQuery or use a CDN (list advantage of CDN)?',

                body: <MD md={advantageCDN} />
            }
        ];
        const assignments = [
            {
                title: 'Complete this selectorTableEasy.html web page, corresponding jsFiddle.and jsBin.',
                body: <div><a href="assets/J2/selectorTableEasy.html">Here</a> is the link to the file</div>
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
