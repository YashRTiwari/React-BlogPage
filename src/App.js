import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails'

function App() {

  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path='/'><Home/></Route>
              <Route exact path='/create-blog'><CreateBlog/></Route>
              <Route exact path='/blogs/:id'><BlogDetails/></Route>
            </Switch>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
