import React from 'react'

const FaouritesHeaders = ({ handleClearFavorites }) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h2 className="text-3xl font-extrabold text-slate-900">Ваши товары</h2>

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
  )
}

export default FaouritesHeaders
