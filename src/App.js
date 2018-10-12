import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


import HomeContainer from './container/Home';
import CategoryContainer from './container/Category';
import NotFound from './container/NotFound';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route path='/category/:name' component={CategoryContainer} />
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default (App);
