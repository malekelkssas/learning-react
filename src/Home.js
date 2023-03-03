import { useState ,useEffect } from "react"; 
import BlogList from "./BlogList";

/**
 * we can use useEffect to fetch data from database and api =>
 *  here we will use Json as fake api and database data
 */

const Home = () => {
    
    const deleteBlog = (id) =>{
        let tmp = blogs.filter(element => element.id !== id);
        setBlogs(tmp);
    };

    const [blogs , setBlogs] = useState(null);
        useEffect(()=>{
            // now we will fetch data => (we can't async here (use await))
            // instead we use (.then()) method
            fetch('http://localhost:8000/blogs').then(res => {
                return res.json();
            }).then( data => {
                setBlogs(data);
                // console.log(data);
            })
            ; // this is a get request 
        },[]);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title = "all blogs" deleteBlog = {deleteBlog} />} {/**this is to check if blogs is null or not */}
           

        </div>
     );
}
 
export default Home;