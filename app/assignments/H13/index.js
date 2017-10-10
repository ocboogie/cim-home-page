import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';
import MD from '../../components/MD';

import formAttributes from './questions/formAttributes.md';
import typeAttribute from './questions/typeAttribute.md';
import attributes from './questions/attributes.md';
import gettingInput from './questions/gettingInput.md';

export default {
    title: 'H13 Chapter 6 HTML Forms Week 4',
    id: 'h13',
    element: () => {
        const questions = [
            {
                title: 'Briefly describe the two form attributes action and method.',

                body: <MD md={formAttributes} />
            },
            {
                title: 'Briefly describe seven type attribute values for tag input?',

                body: <MD md={typeAttribute} />
            },
            {
                title: 'Briefly describe the attributes required, placeholder, value, name, and id.',

                body: <MD md={attributes} />
            },
            {
                title: 'What are the other two tags besides input for getting user input?',

                body: <MD md={gettingInput} />
            },
            {
                title: 'Will we always have version of IE7 floating around (hint consult webcast)?',

                body: 'Yes, or at least for awhile. IE7 is the last version of IE that could integrate into applications.'
            }
        ];
        const assignments = [
            {
                title: 'Complete the example in the webcast checklist points roman numerals I.V.',
                body: <div>I wasn't completely sure what you wanted me to do. So I just did the snoot one. <a href="assets/H13-H15/Chapter/snoot.html">Here</a> is the link to the file</div>
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
