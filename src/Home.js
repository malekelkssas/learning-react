import { useState } from "react"; // this library is to make a vriable reactive => change in browser whenever change in react

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

    const [name, setName] = useState('malek'); //this how we make a value reactive [value , set function]
    const changeName = () =>{
        let tmp = Math.random()*5;
        let tmp2 = ['malek','mohamed','nour','eldean','elkassas']
        setName(tmp2[parseInt(tmp)]);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleclick}>click me</button>
            <button onClick={(event) =>{
                handleclickagain('malek',event);
            }}>click me</button>
            <p> { name } </p>
            <button onClick={changeName}>change the name</button>
        </div>
     );
}
 
export default Home;