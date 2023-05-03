import React from 'react'
import './listItem.css'
import Item from '../Item/Item'

function ListItem({ items, handleDelete }) {
  return (
    <ul className='list-item-screen'>
        {items.map((item) => 
            <Item 
                key={item.id}
                item={item}
                handleDelete={handleDelete}
            />
        )}
    </ul>
  )
}

export default ListItem