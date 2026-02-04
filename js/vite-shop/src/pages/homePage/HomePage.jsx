import React, { useState } from 'react'
import ProductsCart from '../../components/productsCart'
import SearchComponents from '../../components/searchComponents'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCarts, toggleFavorites } from '../../store/productsSlice.js'

const HomePage = () => {
  const products = useSelector((store) => store.products.products)
  const favorites = useSelector((store) => store.products.favourites)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id)
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleFavorite = (current) => {
    dispatch(toggleFavorites(current))
  }

  const handleCarts = (current) => {
    dispatch(toggleCarts(current))
  }

  return (
    <>
      <SearchComponents search={search} setSearch={setSearch} />
      <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Наши товары
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductsCart
                key={product.id}
                product={product}
                onFavorite={handleFavorite}
                onCarts={handleCarts}
                isFavorite={isFavorite(product.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
