import React from 'react';

import Card from './Card';
import style from './Cards.css';

export default (props) => {
    const Cards = props.data.map(item => (
        <div key={item.title}>
            <Card title={item.title}>
                {item.body}
            </Card>
        </div>
    ));

    return (
        <div className={style.container}>
            {Cards}
        </div>
    );
};
