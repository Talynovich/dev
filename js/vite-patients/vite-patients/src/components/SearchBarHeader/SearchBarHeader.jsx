import React, { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import Form from '../../pages/form/index.js'

const SearchBarHeader = ({ filteredPatients, searchTerm, setSearchTerm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Реестр пациентов</h1>
        <p className="text-slate-500">
          Всего записей: {filteredPatients.length}
        </p>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-lg transition-colors font-medium shadow-sm cursor-pointer"
      >
        <span className="text-xl leading-none">+</span>
        <span>Добавить пациента</span>
      </button>
      <Form isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default SearchBarHeader
