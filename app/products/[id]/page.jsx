import React from 'react'
import Header from '@/app/components/Header'
import Product from '@/app/components/Product'
import Trending from '@/app/components/Trending'
import Footer from '@/app/components/Footer'
import Cart from '@/app/components/Cart'
import products from '@/json/data.json'

export default function page({ params }) {
    const id = params.id
    const product = products[id]

    return (
        <>
            <Header />
            <Product params={product} />
            <Trending />
            <Footer />
            <Cart />
        </>
    )
}
