import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartEmpty from './cartEmty/index.js'
import CartList from './cartList/index.js'
import OrderSummary from './orderSummary/index.js'

const CartPage = () => {
  const cartsState = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  if (cartsState.length === 0) {
    return <CartEmpty />
  }
  const totalPrice = cartsState.reduce((acc, el) => {
    const res = acc + el.product.price * el.quantity
    return Math.round(res)
  }, 0)

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <CartList dispatch={dispatch} cartsState={cartsState} />
          </div>
          <OrderSummary totalPrice={totalPrice} />
        </div>
      </main>
    </div>
  )
}

export default CartPage
