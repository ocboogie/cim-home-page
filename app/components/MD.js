import React, { Component } from 'react';

export default class MD extends Component {
    render() {
        return (
            /* eslint-disable react/no-danger */
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.props.md }} />
            </div>
            /* eslint-enable react/no-danger */
        );
    }
}
