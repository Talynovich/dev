import React from 'react'
import { Search, Bell, User, ChevronDown, Activity } from 'lucide-react'
import { Tabs } from 'antd'
import { Link, useLocation } from 'react-router'

const Header = () => {
  const location = useLocation()
  const onChange = (key) => {
    console.log(key)
  }
  const items = [
    {
      key: '/',
      label: <Link to="/">Tab 1</Link>,
    },
    {
      key: '/products',
      label: <Link to="/products">Tab 2</Link>,
    },
  ]
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        <a href="#" className="text-xl font-bold tracking-tight text-blue-600">
          МЕД<span className="text-gray-800">ЦЕНТР</span>
        </a>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Tabs
            defaultActiveKey="/"
            items={items}
            activeKey={location.pathname}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
