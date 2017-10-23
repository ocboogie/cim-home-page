import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import jQueryEffects from './questions/jQueryEffects.md';
import themeRoller from './questions/themeRoller.md';

export default {
    title: 'J5 (formerly H14) jQuery UI and jQuery Plug-ins',
    id: 'j5',
    element: () => {
        const questions = [
            {
                title: 'List and briefly describe three new jQuery UI effects that standard jQuery doesn\'t have.',

                body: <MD md={jQueryEffects} />
            },
            {
                title: 'Which language is the theme roller written in and why?',

                body: <MD md={themeRoller} />
            },
            {
                title: 'Why did I not use a code playground for the examples under web based reading assignments.',

                body: 'Because it\'s about Dreamweaver'
            },
            {
                title: 'Whats wrong with jQuery Tools.',

                body: 'jQuery Tools is deprecated and hasn\'t been updated since 2012'
            }
        ];
        const assignments = [
            {
                title: 'Complete jQueryUI.htm Web page.',
                body: <div><a href="assets/J5/jQueryUITable.html">Here</a> is the link to the file</div>
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
