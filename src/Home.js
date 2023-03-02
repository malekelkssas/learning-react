import { useState } from "react"; // this library is to make a vriable reactive => change in browser whenever change in react
import BlogList from "./BlogList";

/**
 * here i will reuse the compnents with filters
 */

const Home = () => {
    
    const deleteBlog = (id) =>{
        let tmp = blogs.filter(element => element.id !== id);
        setBlogs(tmp);
    };
    const [blogs , setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    );

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "all blogs" deleteBlog = {deleteBlog} />
        </div>
     );
}
 
export default Home;