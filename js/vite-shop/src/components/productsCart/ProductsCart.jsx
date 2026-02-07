import React, { useState } from 'react'

const ProductsCart = ({ product, onFavorite, isFavorite, handleAddToCart }) => {
  const [Favorite, setIsFavorite] = useState(isFavorite)

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white transition hover:bg-gray-50 shadow-sm hover:shadow-md duration-300 relative">
      <button
        type="button"
        onClick={() => {
          setIsFavorite(!isFavorite)
          onFavorite(product)
        }}
        className={`
          absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full
          bg-white bg-opacity-90 shadow-md transition cursor-pointer
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite ? 'red' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21C12 21 4 13.5 4 8.25 4 5.75 6 4 8.5 4c1.54 0 2.95 1 3.5 2.44C12.55 5 13.96 4 15.5 4 18 4 20 5.75 20 8.25 20 13.5 12 21 12 21z"
          />
        </svg>
      </button>
      <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-t-lg">
        <img
          src="https://picsum.photos/200/300"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <span className="text-xs uppercase tracking-wide text-indigo-600 mb-1 font-semibold">
          {product.category}
        </span>
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-grow">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            {product.price} ₽
          </span>

          <button
            type="button"
            onClick={() => handleAddToCart(product)}
            className="
              rounded-md
              bg-gray-900
              px-5
              py-2
              text-sm
              font-medium
              text-black
              border
              border-gray-900
              transition
              hover:bg-gray-800
              hover:border-gray-800
              active:scale-[0.97]
              focus:outline-none
              focus:ring-0
              focus-visible:outline-none
              select-none
              duration-150
              ease-in-out
              cursor-pointer
            "
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCart
