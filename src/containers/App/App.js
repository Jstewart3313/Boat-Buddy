import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { mission } from '../../components/mission/mission'
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
      <header className='header'>
        <NavLink to='/' className='home-link'> Home</NavLink>
        <h1>BOAT BUDDY</h1>
        <NavLink to='/about' className='mission-link'>Mission </NavLink>
      </header>
      <Switch>
        <Route exact path='/about' component={ mission } />
        <Route exact path='/' component={ CardContainer } />
        <Redirect to={{pathname: '/'}} />
      </Switch>
      </main>
    );
  }
}

export default App;
