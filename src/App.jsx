
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './pages/MainLayout'
import React, { useState } from 'react';
import { ScrollContext } from './context/ScrollContext';



export default function App() {
  const [scrollToForm, setScrollToForm] = useState(null);

  return (
    <>
        <ScrollContext.Provider value={{ scrollToForm, setScrollToForm }}>

    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
         <Route path='' element={<Home/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    </ScrollContext.Provider>

    </>
  )
}
