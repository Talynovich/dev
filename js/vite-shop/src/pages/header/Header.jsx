import React from 'react'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'

const Header = () => {
  const favorites = useSelector((state) => state.products.favourites)
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold text-gray-900">
            <Link to="/">MyLogo</Link>
          </div>

          <nav className="flex gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Homepage
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Cart
            </Link>
            <Link
              to="/favorites"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Favorites ({favorites.length})
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
