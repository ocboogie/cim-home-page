import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';

export default {
    title: 'H4 JavaScript Engines, API and Document object Week 3 ',
    id: 'h4',
    element: props => {
        const questions = [
            {
                title: 'What are Spider Monkey, Nashorn and Chrome\'s V8.',

                body: <div>
                    These three are javascript engines; they're what the browser uses to interpret
                    Javascript code. They're pretty much what give Javascript code meaning.
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Developer(s)</th>
                                <th>Written in</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Spider Monkey</td>
                                <td>Mozilla</td>
                                <td>C and C++</td>
                            </tr>
                            <tr>
                                <td>Nashorn</td>
                                <td>Oracle Corporation</td>
                                <td>Java</td>
                            </tr>
                            <tr>
                                <td>Chrome's V8</td>
                                <td>The Chromium Project</td>
                                <td>C++</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            },
            {
                title: 'Explain the difference between the following doc type definitions: (HTML doctype' + ' is HTML5), and HTML4.01 Transitional.',

                body: <div>
                    Doctype defines the XML document type. HTML5.0 has only one doctype and that is just <code>HTML</code>. HTML4.01 had multiple doctypes, and HTML4.01 Transitional was one of them. According to <a href="https://www.w3schools.com/Tags/tag_doctype.asp">w3schools</a> "HTML4.01 Transitional doctype contains all HTML elements and attributes, INCLUDING presentational and deprecated elements."
                </div>
            },
            {
                title: 'Why does HTML5, not have a corresponding XHTML standard?',

                body: 'HTML5 was built from the ground up, based XML, so there\'s no need for a XHTML s' +
                'tandard.'
            }
        ];

        const assignments = [
            {
                title: 'Your journal notebook needs to pass HTML 5.0 validation, once validated add the ' +
                'HTML5 validation icon',
                body: <div className="text-center">
                    <p>Here you go</p>
                    <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" />
                </div>
            },
            {
                title: 'Create an HTML file, that has a table with three columns, column',
                body: <div>Download the file
                    <a href="assets/table.html" download>here</a>
                </div>
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
