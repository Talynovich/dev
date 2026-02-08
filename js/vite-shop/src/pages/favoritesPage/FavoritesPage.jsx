import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsCart from '../../components/productsCart'
import { clearFavorites, toggleFavorites } from '../../store/productsSlice'
import { Link } from 'react-router'
import { addToCart } from '../../store/cartSlice.js'
import FavouritesEmpty from './favouritesEmpty/index.js'
import FaouritesHeaders from './favouritesHeaders/index.js'

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
    return <FavouritesEmpty />
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FaouritesHeaders handleClearFavorites={handleClearFavorites} />
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
