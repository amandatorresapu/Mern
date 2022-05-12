import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch, //switch lets us determine which complents and elements that need to show up
  Route, // what route to show up at
  Link 
} from "react-router-dom";


import Form from './components/Form';
import Results from './components/Results';




function App() {
  return (
    <>
        <BrowserRouter>
          <div className="App container">
            <h1>StarWars API</h1>
            
             
              <Form></Form>

              <Switch>
                <Route exact path = "/:category/:id">
                  <Results></Results>

                </Route>
              </Switch>

          </div>
        </BrowserRouter>
        
      

    </> 
  );
}

export default App;
