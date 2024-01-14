import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*

1) UI updation is controlled by react
2) for doin that, react provides us react hooks. we have to use them if we want to make changes in UI. 
  internally react will do that

*/


function App() {
  
  let [counter,setCounter]=useState(15)//return value m arry ayegi arr[0]-> jo value change hogi, arr[1]-> fn jo us value ko chnage krega
  // useState(default value,)

  // let counter=5


  const addValue=()=>{
    console.log('clicked',Math.random());
    if(counter<20)
    {

      /*
         setCounter(counter+1)
         setCounter(counter+1)
         setCounter(counter+1)
         setCounter(counter+1)

         agar hum aese krr de to kya +4 ho jayega. Nhi aesa nhi hoga. As react fiber do task in batches. ab 
         is kaam ko wo dekhega ki same hi to ho rha to inka ek hi batch bna dega and bas ek baar +1 hoga.
         if we want to add+4 by this way we can do this by

            setCounter((prevCounter)=>{
              return prevCounter+1;
            })
            setCounter((prevCounter)=>{
              return prevCounter+1;
            })
            setCounter((prevCounter)=>{
              return prevCounter+1;
            })
            setCounter((prevCounter)=>{
              return prevCounter+1;
            })

            or just

               setCounter(prevCounter=>prevCounter+1)
               setCounter(prevCounter=>prevCounter+1)
               setCounter(prevCounter=>prevCounter+1)
               setCounter(prevCounter=>prevCounter+1)

      */
      setCounter(counter+1)

    }
  }

  const decreaseValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={decreaseValue}>Remove value</button>
    </>
  )
}

export default App
