import React from 'react'
import { removeFromCart, updateQuantity } from '../../../store/cartSlice.js'

const CartItem = ({ item, dispatch }) => {
  return (
    <li key={item.product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://picsum.photos/200/300"
          alt={item.product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.product.name}</h3>
            <p className="ml-4">
              {Math.round(item.product.price * item.quantity)} ₽
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500 font-light">
            Стоимость: {item.product.price} ₽
          </p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border border-gray-200 rounded-lg">
            <button
              className="px-3 py-1 hover:bg-gray-100 transition text-gray-600 cursor-pointer"
              onClick={() =>
                dispatch(
                  updateQuantity({
                    productId: item.product.id,
                    newQuantity: item.quantity - 1,
                  })
                )
              }
            >
              -
            </button>
            <span className="px-3 py-1 font-medium text-gray-900 border-x border-gray-200">
              {item.quantity}
            </span>
            <button
              className="px-3 py-1 hover:bg-gray-100 transition text-gray-600 cursor-pointer"
              onClick={() => {
                dispatch(
                  updateQuantity({
                    productId: item.product.id,
                    newQuantity: item.quantity + 1,
                  })
                )
              }}
            >
              +
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-500 hover:text-red-600 transition cursor-pointer"
              onClick={() => dispatch(removeFromCart(item.product.id))}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
