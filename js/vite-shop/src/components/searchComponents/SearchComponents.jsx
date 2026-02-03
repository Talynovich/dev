const SearchComponents = ({ search, setSearch }) => {
  return (
    <div className="w-full mt-8">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Поиск товаров..."
          className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-2xl py-4 pl-12 pr-4 transition-all duration-200
                     placeholder:text-slate-400
                     focus:border-slate-300 focus:bg-slate-50 focus:outline-none focus:ring-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchComponents
