import { useEffect,useState } from "react";

//hooks bnana koi bdi baat nhi h. These are like some fns. They can use other react hooks also

function useCurrencyInfo(currency){
    const[data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))

    },[currency])
    console.log(data);
    return data
    
}
export default useCurrencyInfo