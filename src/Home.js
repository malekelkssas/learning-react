import { useState ,useEffect } from "react"; // now we will use effect
import BlogList from "./BlogList";

/**
 * usestate is something called hook
 * there is another hooks
 * now we will use useeffect => it run function everytime we render the element
 *                              and this happen every time you refresh or first load
 *                              and when state (useState) changes
 */

const Home = () => {
    
    const deleteBlog = (id) =>{
        let tmp = blogs.filter(element => element.id !== id);
        setBlogs(tmp);
    };

    const [blogs , setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    );
        const [name,setNAme] = useState("malek");
        useEffect(()=>{
            // take care of changing state inside this
            console.log("hi malek");
            console.log(name);
            // as the page can be re-render many times
            // and i may don't need this function to run
            // every tim i will somthing called dependecy array
            // we pass it as arguments => sothat it runs just after 
            // the first render (if it is empty)
            // or i can put a dependency 
        },[name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "all blogs" deleteBlog = {deleteBlog} />
            <button onClick={()=>setNAme("mo")}>change</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;