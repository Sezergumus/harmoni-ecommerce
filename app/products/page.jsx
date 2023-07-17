import React from 'react'
import Header from '../components/Header'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

export default function page() {
  return (
    <>
        <Header/>
        <AllProducts/>
        <Footer/>
        <Cart/>
    </>
  )
}
