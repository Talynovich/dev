import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Swapi from "../components/Swapi.jsx";
import CountBtn from "../components/CountBtn.jsx";
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css'

function App() {

    return (
        <>
          <Outlet />
        </>
    )
}

export default App
