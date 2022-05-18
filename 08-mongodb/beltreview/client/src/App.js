import logo from './logo.svg';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import './App.css';

import Form from './components/Form';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

// how to re render the page with updates




function App(props) {

  const[formSubmitted, setFormSubmitted] = useState(false)

  return (
    <>
    
      <BrowserRouter>
      <div className="App container">
        
        <Switch>
          <Route exact path="/"> 
          <Form formSubmitted={ formSubmitted } setFormSubmitted={ setFormSubmitted } ></Form>
          <hr />
          <AllProducts formSubmitted={ formSubmitted } ></AllProducts>
         
          </Route>
          <Route exact path="/products/:_id">
           
            <OneProduct></OneProduct>
          </Route>
          <Route exact path="/edit/:_id">
            <EditProductForm></EditProductForm>
           
           
          </Route>
        </Switch>
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;
