import { useParams } from "react-router-dom"; 
import useFetch from "./useFetch";

//now i will use useFetch again

const BlogDetails = () => {
    const {id} = useParams();
    const {data,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);
    //important => this id in the previous line which make the data fetched correctly

    return ( 
<div className="blog-details">
    {isPending && <div> loading</div>}
    {error && <div>{ error }</div>}
    {data && (
        <article>
            <h2>{data.title}</h2>
            <p>Written by {data.author}</p>
            <div>{data.body}</div>
            
        </article>
    )}
</div>

     );
}
 
export default BlogDetails;