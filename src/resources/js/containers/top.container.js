import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

class TopContainer extends Component {
    render() {
        return (
            <div className="flex-center position-ref full-height">
                <div className="content">
                    <div className="title m-b-md">🎃 DEVICE SHARE</div>
                </div>
            </div>
        );
    }
}

export default connect()(TopContainer);