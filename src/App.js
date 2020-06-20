import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useFetch } from './Components/http/http';
import Home from './Components/home';
import SreachRusult from './Components/searchruslut';








function App() {

  return (
    <div className="App">

    <Switch>
        <Route exact  path="/" component={Home} ></Route>
        <Route exact  path="/search" component={SreachRusult}></Route>
    </Switch> 
    </div>
  );
}

export default App;
