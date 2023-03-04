import { useState ,useEffect } from "react"; 
import BlogList from "./BlogList";

/**
 * as featching data from server may take sometime (not like json file here)
 * we will use conditions again to make
 * conditional messege
 */

const Home = () => {
    
    const deleteBlog = (id) =>{
        let tmp = blogs.filter(element => element.id !== id);
        setBlogs(tmp);
    };

    const [blogs , setBlogs] = useState(null);
        useEffect(()=>{
            // i will use settimeout to act like a server
            setTimeout(() => {
               fetch('http://localhost:8000/blogs').then(res => {
                return res.json();
            }).then( data =>{
                setBlogs(data);
                setIsPending(false);
            }); 
            }, 1000);
            
        },[]);

    const [isPending,setIsPending] = useState(true);

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title = "all blogs" deleteBlog = {deleteBlog} />} {/**this is to check if blogs is null or not */}
        </div>
     );
}
 
export default Home;