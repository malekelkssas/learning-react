import BlogList from "./BlogList";
import useFetch from "./useFetch";

/**
 * customizing hooks
 */

const Home = () => {

    const {data,isPending,error} = useFetch('http://localhost:8000/blogs');
    // const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs'); =>data:blogs is just aliasing for data name to blogs
    


    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title = "all blogs" />} {/**this is to check if blogs is null or not */}
        </div>
     );
}
 
export default Home;