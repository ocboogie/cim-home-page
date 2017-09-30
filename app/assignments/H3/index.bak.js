import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import BrieflyDefineTags from './brieflyDefineTags.md';
import Card from '../../components/Card';
import Cards from '../../components/Cards';

export default {
    title: 'H3 -Tag Review & Basic HTML Validation Week 2',
    id: 'h3',
    element: (props) => {
        const questions = [
            {
                title: 'What does API stand for and represent?',

                body: <div>
                    API stands for Application Program Interface. An API is a set of tools that developers use to create something. APIs are commonly paired with an API reference. You can't do much with a set of tools, if you don't know how to use them. <br /> How I see it, it's just a way of communicating with something. The following are some examples:
                    <ul>
                        <li>Communicating with your operating system to make a window appear</li>
                        <li>Communicating with Google's database to get the search results of something</li>
                        <li>Communicating with a web browser in JavaScript</li>
                    </ul>
                    It's all just communicating.

                </div>
            },
            {
                title: 'Compare two popular JavaScript APIs Mozilla JavaScript API - Google Maps API. With these two Java APIs Standard Edition, and one written by me Complex. Java is a lot more extensive than JavaScript, but what advantage do Java APIs have?',

                body: 'The main advantage is Java APIs have a standard when it comes to docs/references, and standards are very important.'

            },
            {
                title: 'Review these two APIs: document, or w3Schools document API. Then describe two methods and two properties for object document.',

                body: <div>
                    <h5>Methods</h5>
                    <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById"><code>Document.getElementById</code></a>: <br />
                            Arguments: <code>String id</code><br />
                            Returns a reference to the element with that id
                        </li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"><code>Document.querySelector</code>: <br /></a>
                            Arguments: <code>String selector</code> same as a CSS selector<br />
                            Returns the first element that matches the selector
                        </li>
                    </ul>
                    <h5>Properties</h5>
                    <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement"><code>Document.documentElement</code></a>: <br />
                            Returns an <code>Element</code> that is the direct child of the document<br />
                        </li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children"><code>ParentNode.children</code></a>: <br />
                            Returns a <code>HTMLCollection</code> of <code>Element</code> that are children of this <code>ParentNode</code><br />
                            Not exclusively on the <code>Document</code> interface, but <code>Document</code> extends <code>ParentNode</code>
                        </li>
                    </ul>
                    Most of these are rewritten versions of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">Mozilla docs</a>
                </div>
            }
        ];

        const assignments = [
            {
                title: 'Your journal notebook needs to pass HTML 5.0 validation, once validated add the HTML5 validation icon',
                body: <div className="text-center">
                    <p>Here you go</p>
                    <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" />
                </div>
            },
            {
                title: 'Create an HTML file, that has a table with three columns, column',
                body: <div>Download the file <a href="assets/table.html" download> here</a></div>
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
        ]

        return (
            <div>
                <Cards data={CardData} />
            </div>
        );
    }
};