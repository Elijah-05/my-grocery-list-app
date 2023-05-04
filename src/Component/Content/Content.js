import React from 'react'
import './content.css'
import Search from '../Search/Search'
import AddItem from '../AddItem/AddItem'
import DescriptionBar from '../DescriptionBar/DescriptionBar'
import ListItem from '../ListItems/ListItem'

function Content({ items, newItem, newPrice, quantity, setNewItem, setNewPrice, setQuantity, handleSubmit, handleDelete, search, setSearch }) {
  
  let regEx = new RegExp(`(^${search}|${search})`, 'i')
  return (
    <main className='main-content'>
        <Search 
          search={search}
          setSearch={setSearch}
        />
        <AddItem 
          newItem={newItem}
          newPrice={newPrice}
          quantity={quantity}
          setNewItem={setNewItem}
          setNewPrice={setNewPrice}
          setQuantity={setQuantity}
          handleSubmit={handleSubmit}
        />
        <DescriptionBar />
        <ListItem
          items={items !== null ? items.filter((item) => regEx.test(item.name)) : items}
          handleDelete={handleDelete}
        />
    </main>
  )
}

export default Content