
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:'beige',
                    backgroundColor:"violet",
                    borderRadius:'8px'
                }}>new page</a>
            </div>
        </nav>
     );
}
 
export default Navbar;

/*
* to create function faster use (sfc)
 */