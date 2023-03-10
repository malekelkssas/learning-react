import { useState } from "react";


const Create = () => {

    // we will keep track with the values
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');

    return ( 
        <div className="create">
            <h2>
                add a new page
            </h2>
            <form action="">
                <label> Blog title:</label>
                <input 
                    type="text"
                    required
                    // adding values
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
                <button> add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create
;