import { useState } from "react";


const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
        setIsPending(true);
        const blog = {title,body,author};
        fetch('http://localhost:8000/blogs',{
            // post request
            method:'Post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then( () => setIsPending(false))
    }

    return (
        
        <div className="create">
            <h2>
                add a new page
            </h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label> Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label> Blog author:</label>
                <select
                value={author}
                onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button> add Blog</button>}
                {isPending && <button disabled> addding blog</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create
;