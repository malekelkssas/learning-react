import { useEffect,useState } from "react";

const useFetch = (url) => {
    
    
    
    const [data ,  setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
            setTimeout(() => {
            fetch(url).then(res => {
                console.log(res);
                if(!res.ok)
                {
                    throw Error('coudn not fetch the data from the server :(')
                }
                return res.json();
            }).then( data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch((err)=>{
                setError(err.message);
                setIsPending(false);
            }); 
            }, 1000);
            
        },[url]); // we add this dependency as we want to fetch the data every time the url changes
        return {data,isPending,error}; //it is logical to return the states & we can use array instead of objects
};

export default useFetch;
