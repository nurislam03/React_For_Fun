import React, { Component } from 'react';

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends Component {
    constructor(props) {
        super(props);
        //this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {
            showWarning: true
        };
    }

    /* This syntax required 'this' to be bind in constructor section */
    /*handleToggleClick() {
        this.setState (prevState => ({
            showWarning: !prevState.showWarning
        }));
    }*/

    /* no need to bind 'this' in constructor section if I use the below syntax */
    handleToggleClick = () =>
        this.setState (prevState => ({
            showWarning: !prevState.showWarning
        })
    )

    render() {
        return (
            <div>
                <h2>Lesson 7: Page | Preventing Component From Rendering </h2>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Page;
