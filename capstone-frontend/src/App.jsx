import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'// add checkout page here when created
import Product from './pages/Product'
import Checkout from './pages/Checkout' // Import the Checkout component

const App = () => {
  return (
    <section className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Create your new routes in your application and place them below this comment */}
        <Route path="/product/:id" element={<Product />} />  
        <Route path="/checkout" element={<Checkout />} />
         {/* Create your new routes in your application and place them above this comment */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App