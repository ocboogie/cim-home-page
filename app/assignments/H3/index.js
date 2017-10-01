import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Collapse from '../../components/Collapses';
import Card from '../../components/Card';
import Cards from '../../components/Cards';
import MD from '../../components/MD';
import brieflyDefineTags from './questions/brieflyDefineTags.md';

export default {
    title: 'H3 -Tag Review & Basic HTML Validation Week 2',
    id: 'h3',
    element: (props) => {
        const questions = [
            {
                title: 'Explain the difference between HTML, XHTML and DHTML?',

                body: `From the beginning: HTML1.0 to HTML4.01 were based on SGML(Standard Generalized Markup Language), but SGML wasn't very strict and uniform, so they made XHTML(Extensible Hypertext Markup Language). XHTML documents are much more strict and well-formed, therefore they can be parsed by a standard XML parser, unlike HTML. DHTML(Dynamic HTML) is the combination of three Technologies HTML(markup - the data to be presented), CSS (Cascading Style Sheet - layout/presentation) and Javascript (behavior/action). These three technologies make up DHTML, which is the standard to this day.`
            },
            {
                title: 'Explain the difference between the following doc type definitions: (HTML doctype is HTML5), and HTML4.01 Transitional.',

                body: <div>Doctype defines the XML document type. HTML5.0 has only one doctype and that is just <code>HTML</code>. HTML4.01 had multiple doctypes, and HTML4.01 Transitional was one of them. HTML4.01 Transitional doctype allows some older PUBLIC and attributes that have been deprecated.</div>

            },
            {
                title: 'Why does HTML5, not have a corresponding XHTML standard?',

                body: 'XHTML is deprecated, in favor of HTML5.'
            },
            {
                title: 'Briefly define the following tags: p, strong, table, td, tr, div, span, body, head, title, html, ul, ol and li.',

                body: <MD md={brieflyDefineTags}/>
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
                body: <div><a href="assets/H3/table.html">Here</a> is the link to the file</div>
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