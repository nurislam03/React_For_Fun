import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* importing components I created */
import HelloWold from './HelloWorld';
import IntroToJSX from './IntroToJSX';
import JSXobject from './JSXobject';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <HelloWold />
        <IntroToJSX />
        <JSXobject />

      </div>
    );
  }
}

export default App;
