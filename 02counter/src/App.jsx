import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   let [counter,setCounter]=useState(417)

//   // let counter = 417 

//   const addValue=()=>{
//     setCounter(counter+1)
//   }
//   const removeValue=()=>{
//     setCounter(counter-1)
//   }
//   return (
//     <>
//       <h1>annyeonghaseyo</h1>
//       <h2>Counter value: {counter}</h2>
//       <button onClick={addValue}>Add value {counter}</button>
//       <br/>
//       <button onClick={removeValue}>Remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

function App() {
  let [counter,setCounter]=useState(0);

  const addValue=()=>(
    setCounter(counter+1)
  )
  const removeValue=()=>(
    setCounter(counter-1)
  )
  return( <>
  <h1>Counter Project</h1>
  <h2>Counter value: {counter}</h2>
  <button onClick={addValue}>Add value: {counter}</button>
  <br/>
  <button onClick={removeValue}>Remove ValueL: {counter}</button>
  </>)
}

export default App