import React from 'react'
import './summary.css'

function ItemSummary({items}) {
  let totalPrice;
  totalPrice = Array.isArray(items) && items.length > 0 ? items.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur ,0) : 0
  let itemLength = Array.isArray(items) ? items.length : 0
  return (
    <footer>
        <div className='footer-container'>
            <p className='number-of-items'>{itemLength} Items</p>
            <div className='total-container'>
                <h3>Total</h3>
                <p><span className='total-price'>{totalPrice}</span> Birr</p>
            </div>
        </div>
    </footer>
  )
}

export default ItemSummary