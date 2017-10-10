import React from 'react';

import Collapse from '../../components/Collapses';
import Cards from '../../components/Cards';

export default {
    title: 'H15 jQuery version and HTML Forms Browser Based Validation',
    id: 'h15',
    element: () => {
        const assignments = [
            {
                title:
                    'Add customized browser based validation to your H13 assignment',
                body: (
                    <div>
                        <a href="assets/H13-H15/Chapter/snootBBV.html">Here</a> is the link to
                        the file
                    </div>
                )
            },
            {
                title:
                    'Implement a jQuery version of H15.',
                body: (
                    <div>
                        <a href="assets/H13-H15/Chapter/snootjQuery.html">Here</a> is the link to
                        the file
                    </div>
                )
            }
        ];

        const CardData = [
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
