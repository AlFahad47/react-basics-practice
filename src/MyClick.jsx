import { useState } from "react"
import React from 'react'

const MyClick = () => {
  const [name, setName] = useState("Molla");
  const hello = (e)=>{
    setName("Fahad")
  }
  return (
  <button onClick={(e)=>hello(e)}>{name} </button>  
  )
}

export default MyClick 