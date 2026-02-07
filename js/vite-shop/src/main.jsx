import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './pages/layout'
import HomePage from './pages/homePage'
import CartPage from './pages/cartPage'
import FavoritesPage from './pages/favoritesPage'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
