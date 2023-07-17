"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import products from '@/json/data.json'

export default function Trending() {
    const handlePrevious = () => {
        const slider = document.querySelector('.trending-products-slider')
        slider.scrollLeft -= 200

        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth - slider.clientWidth
        }
    }

    const handleNext = () => {
        const slider = document.querySelector('.trending-products-slider')
        slider.scrollLeft += 200

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0
        }
    }

    const trendingProducts = products;
    const trendingProductsArray = Object.values(trendingProducts);

    return (
            <section className="trending-container mt-24">
                <div className="container">
                    <div className="trending-upper flex justify-between">
                        <h2 className='font-bold text-2xl'>Trending Products 🔥</h2>
                        <div className="trending-buttons flex gap-4">
                            <button className="trending-button previous bg-[#373737] h-8 w-8 hover:bg-[#000]" id="previous" aria-label="previous" onClick={handlePrevious}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="trending-button next bg-[#373737] h-8 w-8 hover:bg-[#000]" id="next" aria-label="next" onClick={handleNext}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="trending-products-slider mt-4 flex flex-row gap-4 overflow-x-scroll overflow-y-hidden py-2 px-1 relative scroll-smooth whitespace-nowrap">
                        {
                            trendingProductsArray.map((product, index) => {
                                if(product.trending == true){
                                    return (
                                        <div className="trending-product" key={index}>
                                            <Link href={`/products/${product.id}`}>
                                                <div className="trending-product-img">
                                                    <Image src={product.image} alt="trending product" width={500} height={500}/>
                                                </div>
                                                <div className="trending-product-details">
                                                    <div className="trending-product-name">
                                                        <p>{product.name}</p>
                                                    </div>
                                                    <div className="trending-product-price">
                                                        <p><b>{product.price}</b></p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </section>
    )
}
