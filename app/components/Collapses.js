import React from 'react';

import style from './Collapses.css';

let indexId = 0;

export default (props) => {
    const id = indexId;
    indexId += 1;
    const Items = props.items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`${index}-${id}`} className="card">
            <div className="card-header" role="tab">
                <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href={`#collapse${index}-${id}`}>
                        {item.title}
                    </a>
                </h5>
            </div>
            <div id={`collapse${index}-${id}`} className="collapse" role="tabpanel" data-parent={`#accordion${indexId}`}>
                <div className={`card-body ${style.container}`}>
                    {item.body}
                </div>
            </div>
        </div>
    ));

    return (
        <div id={`accordion${indexId}`} role="tablist">
            {Items}
        </div>
    );
};
