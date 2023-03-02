const Home = () => {
// function without arguments is easy to be use (the argument here is event object)
    const handleclick = (event) =>
    {
        console.log('hi there',event);
    }

    //now function with arguments
    const handleclickagain = (name,event) =>
    {
        console.log('hi there',name , event.target);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleclick}>click me</button>
            <button onClick={(event) =>{
                handleclickagain('malek',event);
            }}>click me</button>
        </div>
     );
}
 
export default Home;