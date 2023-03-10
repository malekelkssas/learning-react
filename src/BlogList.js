import { Link } from "react-router-dom";

const BlogList = (props) => {

// i will try ti use id parameters

    return ( 
        <div className="blog-list">
            <h1>{props.title}</h1>
            {
            props.blogs.map((item) =>(
                    <div className="blog-preview" key={item.id}>
                        <Link to={`/blogs/${item.id}`} style={{textDecoration:'none'}}>
                        <h2>{ item.title } </h2>
                        <p>{ item.author } </p>
                        </Link>
                    </div>
                ) )
            }
        </div>
     );
}
 
export default BlogList;