import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import { Summary } from '../Summary/summary.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
      <h1>BOAT BUDDY</h1>
      <Route exact path='/' component={ CardContainer } />
      </main>
    );
  }
}

export default App;
