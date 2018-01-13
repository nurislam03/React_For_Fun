import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* importing components I created */
import HelloWold from './HelloWorld';
import IntroToJSX from './IntroToJSX';
import JSXobject from './JSXobject';
import UpdatingRenderedElement from './UpdatingRenderedElement';
import ButtonToggle from './ButtonToggle';
import LoginControl from './LoginControl';
import Page from './Page';


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
        <UpdatingRenderedElement />
        <ButtonToggle />
        <LoginControl />
        <Page />

      </div>
    );
  }
}

export default App;
