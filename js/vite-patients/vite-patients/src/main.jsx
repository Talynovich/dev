import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import { store } from './store/'
import HomePage from './pages/homePage/'
import LayoutPage from './pages/LayoutPage'
import PatientDetailsPage from './pages/patientDetailsPage'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<PatientDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
