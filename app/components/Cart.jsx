"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import productPhoto from '@/public/products/1/screwdriver.webp'

export default function Cart() {
    const [quantity, setQuantity] = useState(1)

    const cartClose = () => {
        const cart = document.querySelector('.cart-container')
        const cartBg = document.querySelector('.cart-bg')
        cart.classList.remove('open-cart')
        cart.classList.add('closed-cart')
        cartBg.classList.add('hidden')
    }

    return (
        <>
            <div className="cart-container fixed top-0 right-[-100%] z-[500] h-full w-[35rem] bg-[#fff] px-8">
                <div className="cart flex flex-col w-full h-full">
                    <div className="cart-header flex justify-between mt-4">
                        <h1 className="text-2xl font-bold">Cart</h1>
                        <div className="cart-close">
                            <button onClick={cartClose} className='font-bold text-xl'>X</button>
                        </div>
                    </div>
                    <div className="cart-items h-[70%] border-b-2 border-black border-dashed">
                        <div className="cart-item flex relative">
                            <div className="cart-item-image w-[25%]">
                                <Image src={productPhoto} />
                            </div>
                            <div className="cart-item-details flex flex-col align-center justify-center w-[75%] px-4">
                                <h1 className="text-xl font-bold">Screwdriver</h1>
                                <div className="cart-quantity-btns flex border border-black w-fit">
                                    <button className="cart-quantity-btn" onClick={() => {if(quantity > 1){setQuantity(quantity - 1)}}}>-</button>
                                    <div className="cart-quantity-container flex items-center justify-center">
                                        <div className="cart-quantity text-md">{quantity}</div>
                                    </div>
                                    <button className="cart-quantity-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>  
                                <p className="text-md font-bold">${59.99 * quantity}</p>
                            </div>
                            <div className="item-remove absolute bottom-4 right-4">
                                <button className="font-bold text-xl">X</button>
                            </div>
                        </div>
                    </div>
                    <div className="checkout flex justify-between items-center mt-4">
                        <div className="checkout-total flex flex-col justify-between">
                            <h1 className="text-xl font-bold">Subtotal</h1>
                            <p className="text-xl font-bold">${59.99 * quantity}</p>
                        </div>
                        <div className="checkout-btn h-full">
                            <button className="checkout-btn h-full px-6">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-bg fixed top-0 right-0 z-[400] h-full w-full bg-[#000]/[.5] hidden" onClick={cartClose}></div>
        </>
    )
}
