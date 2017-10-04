import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';
import individualElement from './questions/individualElement.md';
import length from './questions/length.md';
import browserLength from './questions/browserLength.md';
import array from './questions/array.md';
import forWhile from './questions/forWhile.md';
import doWhileDiff from './questions/doWhileDiff.md';
import ifSwitch from './questions/ifSwitch.md';

export default {
    title: 'H8 Chapter 3 JavaScript Array Object and Control Structures, jQuery example Week 4',
    id: 'h8',
    element: props => {
        const questions = [
            {
                title: 'How do you access an individual element in an array?',

                body: <MD md={individualElement} />
            },
            {
                title: 'What property do you use to determine the number of elements in an array?',

                body: <MD md={length} />
            },
            {
                title: 'How do you use a browser to check the value of a specific array element?',

                body: <MD md={browserLength} />
            },
            {
                title: 'Briefly describe the Array object, discuss four of its methods and two of its properties.',

                body: <MD md={array} />
            },
            {
                title: 'Briefly discuss the looping flow Control structures (for, while and do while).',

                body: <MD md={forWhile} />
            },
            {
                title: 'What are the differences between a while and do/while statement?',

                body: <MD md={doWhileDiff} />
            },
            {
                title: 'Which repetition statement allows you to initialize a counter variable as part of its syntax?',

                body: <div>A for loop</div>
            },
            {
                title: 'Briefly define the branching flow control structures if, if else and switch/case statement.',

                body: <MD md={ifSwitch} />
            },
        ];
        const assignments = [
            {
                title: 'Complete calendar.htm as done in book and webcast.',
                body: <div><a href="assets/H8/calendar.html">Here</a> is the link to the file</div>
            },
            {
                title: 'Translate calendar.htm to jQuery',
                body: <div><a href="assets/H8/calendarjQuery.html">Here</a> is the link to the file</div>
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
