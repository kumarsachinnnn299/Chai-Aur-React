import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anothername="Chai"
//how to create React Element. Hum jo fn return krte h main.js . react unhe is format m krke samjhti h. 
// Ise hum bina tag sign k return krr skte h only name se
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'click me to visit gooogle',
  anothername
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
   
  </>
  // reactElement
  
  
)
