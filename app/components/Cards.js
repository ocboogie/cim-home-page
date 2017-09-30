import React from 'react';

import Card from './Card';
import style from './Cards.css';

export default props => {
    const Cards = props.data.map((item, index) => {
        return (
            <div key={index}>
                <Card title={item.title}>
                    {item.body}
                </Card>
            </div>
        );
    });
    
    return (
        <div className={style.container}>
            {Cards}
        </div>
    );
}