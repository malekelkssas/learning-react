import { useState ,useEffect } from "react"; 
import BlogList from "./BlogList";

/**
 * handling featching errors
 */

const Home = () => {
    
    const deleteBlog = (id) =>{
        let tmp = blogs.filter(element => element.id !== id);
        setBlogs(tmp);
    };
    
    const [blogs , setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

        useEffect(()=>{
            // i will use settimeout to act like a server
            setTimeout(() => {
            fetch('http://localhost:8000/blogs').then(res => {
                console.log(res);
                if(!res.ok)
                {
                    throw Error('coudn not fetch the data from the server :(')
                }
                return res.json();
            }).then( data =>{
                setBlogs(data);
                setIsPending(false);
                setError(null);
            }).catch((err)=>{
                //console.log(err.message); // this can fetch any error generally 
                setError(err.message);
                setIsPending(false);
            }); 
            }, 1000)
            
        },[]);


    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title = "all blogs" deleteBlog = {deleteBlog} />} {/**this is to check if blogs is null or not */}
        </div>
     );
}
 
export default Home;