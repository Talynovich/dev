import React from 'react'
import SearchBar from './SearchBar.jsx'

const SearchBarHeader = ({ filteredPatients, searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Реестр пациентов</h1>
        <p className="text-slate-500">
          Всего записей: {filteredPatients.length}
        </p>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  )
}

export default SearchBarHeader
