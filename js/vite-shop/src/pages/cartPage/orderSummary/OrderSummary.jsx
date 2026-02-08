import React from 'react'
import { Link } from 'react-router'

const OrderSummary = ({ totalPrice }) => {
  return (
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
            <span className="text-red-600">- {totalPrice} ₽</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between text-xl font-bold text-gray-900">
            <span>Total</span>
            <span>{totalPrice} ₽</span>
          </div>
        </div>

        <button className="mt-6 w-full rounded-md bg-danger py-3 px-4 text-white font-medium hover:bg-gray-800 transition active:scale-[0.98]">
          Купить
        </button>

        <div className="mt-4 text-center">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition underline underline-offset-4"
          >
            Продолжить покупки
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
