import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Banner from './components/Banner'
import Trending from './components/Trending'
import LowerBanner from './components/LowerBanner'
import Footer from './components/Footer'
import Cart from './components/Cart'

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Featured/>
      <Banner/>
      <Trending/>
      <LowerBanner/>
      <Footer/>
      <Cart/>
    </>   
  )
}
