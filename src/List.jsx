import React from 'react'

const List = () => {
  const fruits = ['apple','banana','pinapple','coconuts'];
  fruits.sort()
  const listItems=fruits.map(fruit=> <li>{fruit}</li>)
  return (
    <ol>{listItems}</ol>
  )
}

export default List 