
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/js/dist/dropdown.js'
import Swapi from "./components/Swapi.jsx";
import HomePage from "./pages/homepage";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/styles/reset.css'
import Count from "./pages/count/Count.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/swapi" element={<Swapi />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </>
  )
}

export default App
