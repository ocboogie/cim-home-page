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
                title: 'Create an HTML file with Hello World and your initials using JavaScript',
                body: <div>Download the file <a href="assets/hello.html" download>here</a></div>
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
