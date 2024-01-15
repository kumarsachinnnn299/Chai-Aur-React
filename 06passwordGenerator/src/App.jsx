import { useState, useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState()

  //useRef hook-> for getting reference
  const passwordRef=useRef(null)


  //useCallback hook basically lets you cache a fn definition between re-renders and thus improve performance
  //yhi fn bar bar run hoga to iske definition cache m store ho jayegi
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let index = 1; index <= length; index++) {
      pass += str.charAt(Math.floor(Math.random() * (str.length) + 1))
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 999); : to select only a range 
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(()=>{
    passwordGenerator()//isku wajah se jab page load hoga to khud se chl jayega ye fn
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 py-2'>
          <input 
          type='text' 
          value={password} 
          className='rounded-lg my-3 outline-none w-full py-1 px-3' 
          placeholder='Password' 
          readOnly 
          ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-xl'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}

            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
