import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './components/Home';
import Number from './components/Number';

function App() {
  return (
    <>
    
    <BrowserRouter>
      
        <Switch>
          <Route exact path="/">
            <h1>Home page</h1>
           
          </Route>
          <Route exact path="/home">
            <Home></Home>
           
          </Route>
          <Route exact path="/:id">
            <Number></Number>
            
          </Route>
          <Route exact path="/:id/:color/:color1">
            <Number></Number>
            
          </Route>

        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
