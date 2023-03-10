import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';

// how to send parameters with the routes

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/blogs/:id"> 
            {/* :id is a parameter 
              and as you now blogs will match the nearest one
            */}
              <BlogDetails />
            </Route>
        </Switch>
    
      </div>
    </div>
    </Router>
  );
}


export default App;
