import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/homepage";
import Swapi from "../components/Swapi.jsx";
import CountBtn from "../components/CountBtn.jsx";
import Landing from "./pages/landing";
import NotFoundPage from "./pages/NotFoundPage";
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route  element={<App />} path={"/"}>
        <Route path="/" element={<HomePage />} />
        <Route path="/swapi/:boom" element={<Swapi />} />
        <Route path="/swapi" element={<Swapi />} />
        <Route path="/count" element={<CountBtn />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
