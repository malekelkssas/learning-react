const BlogList = (props) => {
    console.log(props);
    return ( 
        <div className="blog-list">
            <h1>{props.title}</h1>
            {
            props.blogs.map((item) =>(
                    <div className="blog-preview" key={item.id}>
                        <h2>{ item.title } </h2>
                        <p>{ item.body } </p>
                    </div>
                ) )
            }
        </div>
     );
}
 
export default BlogList;