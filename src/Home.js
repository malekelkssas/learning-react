import { useState } from "react"; // this library is to make a vriable reactive => change in browser whenever change in react
import BlogList from "./BlogList";

/**
 * here i will reuse the compnents with filters
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
            <BlogList blogs={blogs.filter((element)=> element.author=='mario')} title = "mario"/>
        </div>
     );
}
 
export default Home;