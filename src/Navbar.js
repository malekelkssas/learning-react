import { Link } from "react-router-dom";

// making react handling the get request instead of getting it from the server
// just instead of a => use Link
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:'beige',
                    backgroundColor:"violet",
                    borderRadius:'8px'
                }}>new page</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

/*
* to create function faster use (sfc)
 */