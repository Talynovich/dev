import React, { useEffect, useState } from 'react'
import ProductsCart from '../../components/productsCart'
import SearchComponents from '../../components/searchComponents'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, toggleFavorites } from '../../store/productsSlice.js'
import { addToCart } from '../../store/cartSlice.js'
import IsLoading from '../../components/isLoading/index.js'

const HomePage = () => {
  const { products, isLoading } = useSelector((store) => store.products)
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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <SearchComponents search={search} setSearch={setSearch} />
      <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <IsLoading />
        ) : (
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
                  isFavorite={isFavorite(product.id)}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
