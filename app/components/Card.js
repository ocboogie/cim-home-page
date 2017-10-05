import React from 'react';

export default props => (
    <div className="card">
        <div className="card-block">
            <div className="text-center">
                <h4 className="card-title">{props.title}</h4>
            </div>
            {props.children}
        </div>
    </div>
);
