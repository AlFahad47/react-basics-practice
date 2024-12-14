import React from 'react'
import profilePic from './assets/react.svg'

const Card = () => {
  return (
    <div className='card'>
        <img className='card-image' src={profilePic}></img>
        <h1>Fahad Molla</h1>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Card 