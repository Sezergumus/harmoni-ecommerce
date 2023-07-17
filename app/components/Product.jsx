"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import productImg from '@/public/products/1/screwdriver.webp'

export default function Product(props) {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="product-container mt-24">
            <div className="container">
                <div className="product flex justify-center">
                    <div className="product-img w-1/2 border-2">
                        <Image src={props.params.image} alt="product" className="w-fit mx-auto p-[16px] max-h-[500px] object-contain" width={500} height={500} layout="responsive" />
                    </div>
                    <div className="product-info w-1/2 flex flex-col bg-[#e9e9e9] px-8 py-4 justify-center">
                        <h2 className="product-name font-bold text-2xl mt-5 mb-3">{props.params.name}</h2>
                        <p className="product-desc mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat exercitationem facere architecto quae nam numquam aspernatur, accusantium autem similique tenetur quis molestias laboriosam, dolore modi nesciunt quia voluptate! Architecto tenetur cumque voluptatibus blanditiis nulla sunt quis voluptas quo error. Provident, maiores? Quos assumenda minima optio. Aliquam culpa corrupti ullam!</p>
                        <div className="quantity-price flex flex-row items-center justify-between mb-10">
                            <p className='product-quantity-text font-bold text-2xl'>Quantity</p>
                            <div className="quantity-btns flex border border-black">
                                <button className="quantity-btn" onClick={() => {if(quantity > 1){setQuantity(quantity - 1)}}}>-</button>
                                <div className="quantity-container flex items-center justify-center">
                                    <div className="quantity text-lg">{quantity}</div>
                                </div>
                                <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <p className="product-price font-bold text-2xl">${props.params.price * quantity}</p>
                        </div>
                        <div className="product-btns flex gap-8">
                            <button className="atc-btn w-1/2">ADD TO CART</button>
                            <button className="buy-btn w-1/2">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="product-specs flex justify-between w-full gap-3 mt-12">
                    <div className="spec bg-[#e9e9e9] p-6 w-full">
                        <h3 className="spec-title font-bold text-xl mb-2">Texture:</h3>
                        <p className="spec-desc">Comfy Material</p>
                    </div>
                    <div className="spec bg-[#e9e9e9] p-6 w-full">
                        <h3 className="spec-title font-bold text-xl mb-2">Weight:</h3>
                        <p className="spec-desc">25kg</p>
                    </div>
                    <div className="spec bg-[#e9e9e9] p-6 w-full">
                        <h3 className="spec-title font-bold text-xl mb-2">Size:</h3>
                        <p className="spec-desc">60cm x 30cm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
