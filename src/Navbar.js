import { Link } from "react-router-dom";

// as switching between the routes may case error as react is still featching data
// and i try to reaqt new update 
//i will now solve this problem in useFeatch hook

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

