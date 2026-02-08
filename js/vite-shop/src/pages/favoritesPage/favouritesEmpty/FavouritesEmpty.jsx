import React from 'react'
import { Link } from 'react-router'

const FavouritesEmpty = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <span className="mb-2 text-5xl text-black">♡</span>
      <p className="text-gray-500 text-lg font-medium">Нет избранных товаров</p>
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

export default FavouritesEmpty
