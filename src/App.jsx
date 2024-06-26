import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout'
import Home from "./components/Home";
import Projects from "./components/Projects";

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
