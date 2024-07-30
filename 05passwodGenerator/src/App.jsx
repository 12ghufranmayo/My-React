import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str+= "0123456789"
    if (charAllowed) str+= "~!@#$%^&*()_+-={}[]|\:;<>,.?/"

    for (let i =1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToclipboard = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 py-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-xl text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='w-full outline-none py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}        
        />
        <button
        className='outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'
        onClick={copyPasswordToclipboard}>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}           
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {setNumAllowed((prev) => !prev)}}        
          />
          <label>Numbered</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {setCharAllowed((prev) => !prev)}}        
          />
          <label>Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
