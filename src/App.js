import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


import HomeContainer from './container/Home';
import CategoryContainer from './container/Category';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route path='/category/:name' component={CategoryContainer} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default (App);
