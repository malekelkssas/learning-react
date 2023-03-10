import { useParams } from "react-router-dom"; //this is a new hook

const BlogDetails = () => {
    // now i will fetch the id in url
    const {id} = useParams();
    return ( 
<div className="blog-details">
    <h2>
        Blog Details  {id}
    </h2>
</div>

     );
}
 
export default BlogDetails;