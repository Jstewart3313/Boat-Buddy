import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
       <Route exact path='/' component={ CardContainer } />
      </main>
    );
  }
}

export default App;
