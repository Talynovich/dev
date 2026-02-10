import React from 'react'
import { Search, Bell, User, ChevronDown, Activity } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        <a href="#" className="text-xl font-bold tracking-tight text-blue-600">
          МЕД<span className="text-gray-800">ЦЕНТР</span>
        </a>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">
            Услуги
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Врачи
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Цены
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
