import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route } from "react-router-dom";

import LoginScreen from './Screens/LoginScreen';
import AllEventsScreen from './Screens/AllEventsScreen';
import OneEventScreen from './Screens/OneEventScreen';
import ToDoListScreen from './Screens/ToDoListScreen';
import CreateNewScreen from './Screens/CreateNewScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={LoginScreen}/>
        <Route path="/events" exact component={AllEventsScreen}/>
        <Route path="/events/:id" component={OneEventScreen}/>
        <Route path="/new" component={CreateNewScreen}/>
        <Route path="/todos" component={ToDoListScreen}/>
      </div>
    </Router>
  )
}
export default App;
