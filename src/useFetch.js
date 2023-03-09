import { useEffect,useState } from "react";

const useFetch = (url) => {
    
    
    const [data ,  setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(()=>{
        // i will use cleanup function to prevent the crushes in quick page switching 
        const abortCont = new AbortController(); //we will use this to stop fetch
        const signal = abortCont.signal;
            setTimeout(() => {
            fetch(url, {signal}).then(res => {
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
                if(err.name ==='AbortError')
                {
                    console.log("signal.aborted err");

                }
                else{
                setError(err.message);
                setIsPending(false);
                }
            }); 
            }, 1000);

            //cleanup function
            return () => abortCont.abort();
            
        },[url]); 
        return {data,isPending,error};
};

export default useFetch;
