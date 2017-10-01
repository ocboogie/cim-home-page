import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';

export default {
    title: 'H5 Chapter 1 Intro JavaScript Week 3',
    id: 'h5',
    element: props => {
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

                body: <div>Just a simple double forward slash: <code>console.log("Not commented") // line comment</code>. It's often recommended to put a space after the double forward slash</div>
            },
            {
                title: 'What is an identifier?',

                body: <div>Identifiers are names. Identifiers are used to name variables, keywords, functions and labels. Identifiers may consist of letters, digits(not as the first character), underscores, or dollar signs. All of the following are identifier:<br /><code>
                    function variableIdentifier() {"{}"} // "function" is an identifier as well<br />
                    var variableIdentifier = null; // "var" is also an identifier<br />
                    labelIdentifier: {"{}"}<br />
                </code></div>
            },
            {
                title: 'What is an event handler for?',

                body: <div>An event handler is an action of some sort that executes when an event happens. All of the following are event handlers:<br/><code>
                        {"<button onclick=\"alert('A button was pressed')\">This is a button</button>"}<br />
                        // The following is Javascript with jQuery<br/>
                        $("button").click(function eventHandler(e) {"{"}<br/>
                            alert(e + " was pressed");<br/>
                        {"}"});
                </code></div>
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
