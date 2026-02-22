import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import { store } from './store/index.js'
import HomePage from './pages/homePage/'
import LayoutPage from './pages/LayoutPage'
import PatientDetailsPage from './pages/patientDetailsPage'
import Products from './pages/products'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<PatientDetailsPage />} />
        </Route>
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
