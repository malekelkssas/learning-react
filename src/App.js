

import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Add Component";
  const likes = 50;
  const lin= "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        
        {/* <br />
        <h2>Component</h2>
        <p>Liked {likes} times</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{parseInt(Math.random()*10)}</p>
        <a href={lin}>google</a> */}

      </div>
    </div>
  );
}
/*
* what inside the return in the function is not html, it is jsx and called templet
*here we use className instead of class (camelCase) 
*to create element with class name id => (element.name) div.content
*in line 20 => we always export out component function then use it in index.js by importing it and use it (line 4, 10)
*this is the root folder App.js => any folders far away will be subtree of this =>e.g Navbar.js
*/

export default App;
