import React, { Component } from 'react';


class UpdatingRenderedElement extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; // initializing date|state.
    }

    updateTime() {
        this.setState({
            date: new Date()
        });
    }

    /* LifeCycle hooks */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        );
    }

    /* LifeCycle hooks */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h2>Lesson 4: State, ES6 Syntax, Updating Rendered Element</h2>
                <h2>It is {this.state.date.toLocaleTimeString()}. </h2>
            </div>
        );
    }
}

export default UpdatingRenderedElement;
