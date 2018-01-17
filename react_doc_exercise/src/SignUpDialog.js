import React, { Component } from 'react';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title"> {props.title} </h1>
            <p className="Dialog-message"> {props.message} </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            login: e.target.value
        });
    }

    handleSignUp = () => {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <div>
                <h1>Lesson 11: Composition vs Inheritance | SignUp Dialog within Fancyborder</h1>
                <Dialog
                    title="Mars Exploration Program"
                    message="How should we refer to you?" >
                    <input
                        value={this.state.login}
                        onChange={this.handleChange} />
                    <button onClick={this.handleSignUp}>
                        Sign Me Up!
                    </button>
                </Dialog>
                <br />
                <br />
            </div>
        );
    }
}

export default SignUpDialog;
