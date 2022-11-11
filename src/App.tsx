import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CountryDetails } from "./components/CountryDetails"
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
