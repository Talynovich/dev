import React from 'react'
import { LockIcon } from '../../../shared/ui/Icon/cart/index.js'
import { Link } from 'react-router'

const CartEmpty = () => {
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

export default CartEmpty
