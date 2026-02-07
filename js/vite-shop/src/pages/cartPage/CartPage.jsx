import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { LockIcon } from '../../shared/ui/Icon/cart'
import { removeFromCart, updateQuantity } from '../../store/cartSlice.js'

const CartPage = () => {
  const cartsState = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  if (cartsState.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <LockIcon className="mt-2" />
        <p className="text-gray-500 text-lg font-medium">Корзина пуста</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center justify-center rounded-lg
            px-5 py-2 text-sm font-medium text-black"
        >
          Перейти к товарам
        </Link>
      </div>
    )
  }
  const totalPrice = cartsState.reduce((acc, el) => {
    return acc + el.product.price * el.quantity
  }, 0)
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {cartsState.map((item) => (
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
                            {item.product.price * item.quantity} ₽
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
                            onClick={() =>
                              dispatch(removeFromCart(item.product.id))
                            }
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Детали заказа
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Итого</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Доставка</span>
                  <span className="text-green-600">Бесплатно</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Скидка 10%</span>
                  <span className="text-red-600">- {totalPrice * 0.1} ₽</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex items-center justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>{totalPrice * 0.9} ₽</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-md bg-gray-900 py-3 px-4 text-white font-medium hover:bg-gray-800 transition active:scale-[0.98]">
                Проверить
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition underline underline-offset-4"
                >
                  Продолжить
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CartPage
