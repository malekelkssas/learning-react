import { useState } from "react"; // this library is to make a vriable reactive => change in browser whenever change in react

const Home = () => {

    const [blogs , setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    );
    //list of objects

    /**we must here in the div have a key property to be able to keep aabtract with each object or item 
     * and the id must be unique
     * 
    */
    return ( 
        <div className="home">
            {
            blogs.map((item) =>(
                    <div className="blog-preview" key={item.id}>
                        <h2>{ item.title } </h2>
                        <p>{ item.body } </p>
                    </div>
                ) )
            }
        </div>
     );
}
 
export default Home;