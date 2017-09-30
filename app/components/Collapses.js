import React from 'react';

let indexId = 0;

export default (props) => {
    const id = indexId++;
    const Items = props.items.map((item, index) => (
        <div key={`${index}-${id}`} className="card">
            <div className="card-header" role="tab">
                <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href={`#collapse${index}-${id}`}>
                        {item.title}
                    </a>
                </h5>
            </div>
            <div id={`collapse${index}-${id}`} className="collapse" role="tabpanel" data-parent={`#accordion${indexId}`}>
                <div className="card-body">
                    {item.body}
                </div>
            </div>
        </div>
    ));

    return (
        <div id={`accordion${indexId}`} role="tablist">
            {Items}
        </div>
    )
};