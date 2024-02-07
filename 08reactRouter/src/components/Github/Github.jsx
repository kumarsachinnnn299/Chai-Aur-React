import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    /*
    //Way 1

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch( 'https://api.github.com/users/kumarsachinnnn299').then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])

    */

    const data=useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Github Username: {data.login}<br></br>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git DP" />
      
    </div>
  )
}

//Way2-> Using loader() -> ye slightly faster h, Useeffect se bhi thoda fatser h
//Ye useloaderdata hook ki help se use krenge
//Ye yha export krne ki jagah ek alag se file bhi bna skte h. Wo jyada better rhega 

export default Github;
export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/kumarsachinnnn299')
   return response.json()
}
