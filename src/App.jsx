
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './pages/MainLayout'
import React, { useState } from 'react';
import { ScrollContext } from './context/ScrollContext';
import AboutPage from './pages/AboutPage';
import WhyChooseUs from './components/WhyChooseUs';
import RestaurantTypePage from './components/RestaurantTypePage';



export default function App() {
  const [scrollToForm, setScrollToForm] = useState(null);

  return (
    <>
        <ScrollContext.Provider value={{ scrollToForm, setScrollToForm }}>

    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
         <Route path='' element={<Home/>} />
         <Route path='/aboutus' element={<AboutPage/>}/>
         <Route path='/whychoose' element={<WhyChooseUs/>}/>
         <Route path="/restaurant-type/:type" element={<RestaurantTypePage />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </ScrollContext.Provider>

    </>
  )
}
