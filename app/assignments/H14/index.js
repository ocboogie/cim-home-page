import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import figureOut from './questions/figureOut.md';
import supportRegex from './questions/supportRegex.md';
import regexSymbols from './questions/regexSymbols.md';
import explainRegex from './questions/explainRegex.md';
import HTMLEvents from './questions/HTMLEvents.md';
import mouseOver from './questions/mouseOver.md';
import automaticA from './questions/automaticA.md';
import chromeChecking from './questions/chromeChecking.md';

export default {
    title: 'H14 Form w Regular Expressions, JavaScript events and Validation Week 4',
    id: 'h14',
    element: () => {
        const questions = [
            {
                title: 'Can you figure out how this works.',

                body: <MD md={figureOut} />
            },
            {
                title: 'Do many programming language support regular expressions?',

                body: <MD md={supportRegex} />
            },
            {
                title: 'What do these regular expression symbols mean: ^, $, \\d, \\s, \\w, [0-9], [a-zA-Z], |, ?, . (dot), *, {3,5}. You may want to use this regexp or short regexp cheat sheet.',

                body: <MD md={regexSymbols} />
            },
            {
                title: 'Also Comment on this very large collection of Regular Expressions. ',

                body: <div>Very useful</div>
            },
            {
                title: 'Briefly explain these three JavaScript regular expressions...',

                body: <MD md={explainRegex} />
            },
            {
                title: 'Briefly define these HTML events: onclick, onsubmit, onfocus, onmouseover',

                body: <MD md={HTMLEvents} />
            },
            {
                title: 'Mouse Over here what is happening?',

                body: <MD md={mouseOver} />
            },
            {
                title: 'Can you get an automatic A using the form block below, if not why?',

                body: <MD md={automaticA} />
            },
            {
                title: 'What form types are listed below, does chrome provide automatic pattern checking...',

                body: <MD md={chromeChecking} />
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
