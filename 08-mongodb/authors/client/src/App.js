import logo from './logo.svg';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import './App.css';

import Form from './components/Form';
import AllAuthors from './components/AllAuthors';
import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthors';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App container">
          {/* this shows up in all the browers */}
          <h1>Favorite authors</h1>
          <Link to='/form'>Add new author</Link>
          
          
          
          <Switch>
            <Route exact path ="/form">
            <Form></Form>
            </Route>
            <Route exact path="/authors/:_id">
           
           <OneAuthor></OneAuthor>
          </Route>
            <Route exact path="/">
            <AllAuthors></AllAuthors>
            </Route>
            <Route exact path="/edit/:_id">
            <EditAuthor></EditAuthor>
           
           
          </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    </>
      
    
  );
}

export default App;
