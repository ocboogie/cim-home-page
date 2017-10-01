import React, { Component } from 'react';

export default class MD extends Component {
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.props.md }} />
            </div>
        );
    }
}