import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsCart from '../../components/productsCart'
import { clearFavorites, toggleFavorites } from '../../store/productsSlice'
import { Link } from 'react-router'
import { addToCart } from '../../store/cartSlice.js'

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.products.favourites)
  const dispatch = useDispatch()

  const handleFavorite = (current) => {
    dispatch(toggleFavorites(current))
  }

  const handleClearFavorites = () => {
    dispatch(clearFavorites())
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  if (favorites.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="mb-2 text-5xl text-black">♡</span>
        <p className="text-gray-500 text-lg font-medium">
          Нет избранных товаров
        </p>
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

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Ваши товары
          </h2>

          <button
            onClick={handleClearFavorites}
            className="
            rounded-md
              bg-danger
              px-5
              py-2
              text-sm
              font-medium
              text-black
              border
              border-gray-900
              transition
              hover:bg-danger
              hover:border-gray-800
              active:scale-[0.97]
              focus:outline-none
              focus:ring-0
              focus-visible:outline-none
              select-none
              duration-150
              ease-in-out
              cursor-pointer"
          >
            Очистить избранное
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductsCart
              key={product.id}
              product={product}
              onFavorite={handleFavorite}
              isFavorite={true}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage
