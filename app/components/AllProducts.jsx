"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import products from '@/json/data.json'

export default function AllProducts() {
    const allProducts = products;
    const allProductsArray = Object.values(allProducts);

    const handleClick = (e) => {
        // add active class to the button found with the id
        const buttons = document.querySelectorAll('.all-products-filter-grid button')
        buttons.forEach(button => {
            button.classList.remove('active')
        })
        
        const button = document.getElementById(e)
        button.classList.add('active')

        // filter products
        const products = document.querySelectorAll('.category-product')
        products.forEach(product => {
            if(e === 'all') {
                product.classList.remove('hidden')
            } else if(product.classList.contains(e)) {
                product.classList.remove('hidden')
            } else {
                product.classList.add('hidden')
            }
        })

        // if no products are found
        const noProducts = document.querySelector('.no-products')
        if(noProducts) {
            noProducts.remove()
        }

        if(document.querySelectorAll('.category-product.hidden').length === products.length) {
            const noProducts = document.createElement('p')
            noProducts.classList.add('no-products')
            noProducts.classList.add('text-center')
            noProducts.classList.add('text-2xl')
            noProducts.classList.add('font-bold')
            noProducts.classList.add('mt-8')
            noProducts.classList.add('text-gray-500')
            noProducts.classList.add('w-full')
            noProducts.textContent = 'No products found'
            const container = document.querySelector('.all-products')
            container.appendChild(noProducts)
        }
    }

    return (
    <section className="all-products-container mt-24">
        <div className="container">
            <div className="category-header">
                <div className="all-products-title flex">
                    <Link href="/">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#000">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Home
                        </div>
                    </Link>
                    <h1 className="text-2xl font-bold mx-auto">All Products</h1>
                </div>
                <div className="all-products-filter-grid mt-8">
                    <button className="bg-[#000]/[.5] text-white px-4 py-2 hover:bg-[#000]/[.8] active" id="all" onClick={() => handleClick('all')}>All</button>
                    <button className="bg-[#000]/[.5] text-white px-4 py-2 hover:bg-[#000]/[.8]" id="home" onClick={() => handleClick('home')}>Home</button>
                    <button className="bg-[#000]/[.5] text-white px-4 py-2 hover:bg-[#000]/[.8]" id="kitchen" onClick={() => handleClick('kitchen')}>Kitchen</button>
                    <button className="bg-[#000]/[.5] text-white px-4 py-2 hover:bg-[#000]/[.8]" id="skincare" onClick={() => handleClick('skincare')}>Skincare</button>
                    <button className="bg-[#000]/[.5] text-white px-4 py-2 hover:bg-[#000]/[.8]" id="tech" onClick={() => handleClick('tech')}>Tech</button>
                </div>
            </div>
            <div className="all-products">
                <div className="all-products-grid mt-8">
                    {
                        allProductsArray.map((product, index) => {
                            return(
                                <div className={`category-product ${product.category}`} key={index}>
                                    <Link href={`/products/${product.link}`}>
                                        <div className="category-product-img">
                                            <Image src={product.image} alt="category product" width={500} height={500} />
                                        </div>
                                        <div className="category-product-details">
                                            <div className="category-product-name">
                                                <p>{product.name}</p>
                                            </div>
                                            <div className="category-product-price">
                                                <p><b>${product.price}</b></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
