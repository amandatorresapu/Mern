import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch, //switch lets us determine which complents and elements that need to show up
  Route, // what route to show up at
  Link 
} from "react-router-dom";

import About from './components/About';
import Players from './components/Players';
import Teams from './components/Teams';
import Games from './components/Games';

function App() {
  return (

    <BrowserRouter>
        <div className="App">
          <div className="navbar">
            <h1>Welcome to routing!</h1>
              <ul id="nav-links">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/teams">teams</Link></li>
              </ul>
          </div>

        <Switch>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/games">
            <Games></Games>
          </Route>
          <Route exact path="/players">
            < Players></Players>
          </Route>
          <Route exact path="/teams">
            <Teams></Teams>
          </Route>
          <Route exact path="/teams/:id">
            <Teams></Teams>
          </Route>
          <Route exact path="/teams/:id/:color">
            <Teams></Teams>
          </Route>

        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
