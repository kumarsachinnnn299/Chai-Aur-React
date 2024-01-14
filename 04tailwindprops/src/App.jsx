import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {

  let myObj={
    username:"Sachin",
    age:22
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
     
      {/* <Card  channelName='Chai or Code' obj={myObj} />   */}

      <Card username="Sachin Kumar Singh" btnText='Click Me'/>
      <Card username="Abhishek" btnText='Visit Me'/>


     
    </>
  )
}

export default App
