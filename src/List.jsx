import React from 'react'
import PropTypes from 'prop-types';

const List = (props) => {
  const itemList = props.items;
  const category= props.category;
  const listItems = itemList.map(item=>
                                    <li key={item.id}>{item.name} &nbsp; <b>{item.calories}</b></li>
                                )
  return (
    <div>
      <h2 className='list-category'>{category}</h2>
      <ol className='list-items'> {listItems}</ol>
    </div>
  )
}
List.propTypes={
  category:PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                          name:PropTypes.string,
                                          calories:PropTypes.number
  }))

}

export default List
