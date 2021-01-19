import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path='/'><Home/></Route>
            </Switch>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
