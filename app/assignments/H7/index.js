import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import evaluated from './questions/evaluated.md';
import select from './questions/select.md';
import jQueryChaining from './questions/jQueryChaining.md';
import avoidWrite from './questions/avoidWrite.md';

export default {
    title: 'H7 Chapter 2 Comparison and Conditional Operators, jQuery Example Week 3',
    id: 'h7',
    element: () => {
        const questions = [
            {
                title: 'What is a comparison operator? What kind of values does it return?',

                body: <div>
                    A comparison operator compares two things to determine if they are equal<br />
                    There are two comparison operators <code>==</code> and <code>===</code>.<br />
                    <code>==</code> returns <code>true</code> if the operands are equal with type conversion, otherwise it returns <code>false</code>.<br />
                    <code>===</code> returns <code>true</code> if the operands are equal <i>without</i> type conversion, otherwise it returns <code>false</code>.<br />
                    <code>!=</code> and <code>!==</code> return the opposite of what they would.
                </div>
            },
            {
                title: 'How is the expression 5 + 2 * 8 evaluated? Explain your answer.',

                body: <MD md={evaluated} />
            },
            {
                title: 'From web page assignment, give and briefly describe an example of jQuery chaining.',

                body: <MD md={jQueryChaining} />
            },
            {
                title: 'With jQuery how do you select more than one single ID element at a time?',

                body: <MD md={select} />
            },
            {
                title: 'How do you avoid using document.write on a webpage?',

                body: <MD md={avoidWrite} />
            }
        ];
        const assignments = [
            {
                title: 'Complete the estimate1.htm as done in webcasts and in book.',
                body: <div><a href="assets/H6-H7/Chapter/estimate.html">Here</a> is the link to the file</div>
            },
            {
                title: 'Rewrite estimate1.htm to jQuery on your own or as done in webcast (steps outline at end of this assignment)',
                body: <div><a href="assets/H6-H7/Chapter/estimatejQuery.html">Here</a> is the link to the file</div>

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
