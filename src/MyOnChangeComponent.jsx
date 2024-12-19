import React from 'react'
import { useState } from 'react'

const MyOnChangeComponent = () => {
    const [name,setName]  = useState("Guest");
    const [quantity,setQuantity]= useState(0);
    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handleQuantityChange = (event)=>{
          setQuantity(event.target.value)
    }
  return (
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        <input value={quantity} type="number" onChange={handleQuantityChange}></input>
        <p>Quantity:{quantity}</p>
    </div>
  )
}

export default MyOnChangeComponent