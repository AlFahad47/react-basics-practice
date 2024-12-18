import { useState } from "react"
import React from 'react'


const Counter = () => {
 const [count,setCount]= useState(0);
 const increase = ()=>{
  setCount(count+1);
 }
 const decrease =()=>{
  setCount(count-1);
 }
 const reset =()=>{
  setCount(0);
 }
  return (
    <div className="counter-container">
      <p className="counter-display">{count}</p>
      <button onClick={decrease}  className="counter-button">Decrease</button>
      <button onClick={reset} className="counter-button">Reset</button>
      <button onClick={increase} className="counter-button">Increase</button>
    </div>
  )

}

export default Counter

