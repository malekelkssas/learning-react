import { useState } from "react"; // this library is to make a vriable reactive => change in browser whenever change in react
import BlogList from "./BlogList";

/* if there is a prop can repeat i will do the following putting it in new js file =>i think i will do the some as the 
    the relation between index.js and the App.js with the remaining files 
    and we will pass parameters using prop => prop is a way to pass parameters between components (from parent one to child)
*/

const Home = () => {

    const [blogs , setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    );

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "all blogs"/>
        </div>
     );
}
 
export default Home;