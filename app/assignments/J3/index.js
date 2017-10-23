import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import comment from './questions/comment.md';

export default {
    title: 'J3 (formerly H12) Intro to jQuery - jQuery Selectors & JavaScript onclick event review',
    id: 'j3',
    element: () => {
        const questions = [
            {
                title: 'Comment on Stack-flow discussion minify versus gzip?',

                body: <MD md={comment} />
            }
        ];
        const assignments = [
            {
                title: 'Complete this jQuery Selector assignment Table.',
                body: <div><a href="assets/J3/selectorTable.html">Here</a> is the link to the file</div>
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
