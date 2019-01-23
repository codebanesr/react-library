import React, { PureComponent } from 'react'
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom'
import LoginPage from './components/LoginPage';

export default class App extends PureComponent {
  render() {
    return (
      <div className="ui container">
        <Route path='/login' exact component={LoginPage} />
        <Route path='/' exact component={HomePage} />
      </div>
    )
  }
}
