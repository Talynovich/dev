import React from 'react'
import CartItem from '../cartItem/index.js'

const CartList = ({ dispatch, cartsState }) => {
  return (
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {cartsState.map((item) => (
          <CartItem item={item} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  )
}

export default CartList
