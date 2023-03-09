import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
// I will learn routs using react
/**
 * 1-first we suround our entiry application with Router
 * 2- make Switch to each page (where is the new content will be
 *  put ) => in this example it will be put after the div of className = content
 *  it also ensure that only one route show in one time
 * 3-set our routes for each page
 * *notice that the Navbar always in show because it is not in the switch
 */

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
        </Switch>
    
      </div>
    </div>
    </Router>
  );
}


export default App;
