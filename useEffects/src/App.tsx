import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const ref=useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if(ref.current)ref.current.focus
  })

  useEffect(()=>{
  document.title="useEffect";
  })
  return (
    <>
    <div >
      <h1>A simple typescript project to learn about useEffects</h1>
      <br />
      <br />
      <input ref={ref} type="text" placeholder='Enter fullname' className="input-form" />
    </div>
    </>
  )
}

export default App
