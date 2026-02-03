import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import './App.css'

function App() {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
