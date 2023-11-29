import { useCallback, useState ,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[showNumber,setshowNumber]=useState(false)
  const[showCharachter,setshowCharachter]=useState(false)
  const [Password,setPassword]=useState("")

  //useRef hhok
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
   let pass=""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(showNumber) str+="1234567890";
   if(showCharachter) str+="!@#$%^&*_+=-"
   for (let i = 1; i <= length; i++) {
     
    pass+=str.charAt(Math.floor(Math.random() * str.length +1));
    
   }
   setPassword(pass);

  },[length,showCharachter,showNumber])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
   window.navigator.clipboard.writeText(Password)
  },)

  useEffect(() => {
    passwordGenerator();
  }, [length,showCharachter,showNumber])
  


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-center px-4  my-8 py-3 text-green-500  bg-gray-700'>
       <h1 className='text-white text-center my-2 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={Password}
          className='outline-none  w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className=' outline-none bg-green-500 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
               min={6}
               max={100}
               value={length}
               className=' cursor-pointer '
               onChange={(e)=>{setLength(e.target.value)}} 
               />
            <label>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={showNumber}
              id="numberInput"
              onChange={()=>{
                setshowNumber(!showNumber)
              }}/>

              <label for="numberInput">Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={showCharachter}
              id="charchterInput"
              onChange={()=>{
                setshowCharachter((prev)=> !prev)
              }}/>

              <label for="charchterInput">Charachter</label>
            </div>

          </div>
        </div>
    </>
  )
}

export default App
