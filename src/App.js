import React from 'react';
import './App.css';

import { HashRouter as Router, Route } from "react-router-dom";

import LoginScreen from './Screens/LoginScreen';
import AllEventsScreen from './Screens/AllEventsScreen';
import OneEventScreen from './Screens/OneEventScreen';
import ShoppingListScreen from './Screens/ShoppingListScreen';
import CreateNewScreen from './Screens/CreateNewScreen';
import RegisterScreen from './Screens/RegisterScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={LoginScreen}/>
        <Route path="/events" exact component={AllEventsScreen}/>
        <Route path="/events/:id" component={OneEventScreen}/>
        <Route path="/new" component={CreateNewScreen}/>
        <Route path="/shoppinglist/:id" component={ShoppingListScreen}/>
        <Route path="/register" component={RegisterScreen}/>
      </div>
    </Router>
  )
}
export default App;
