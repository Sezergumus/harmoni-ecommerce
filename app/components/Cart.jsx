"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
    const [cartItems, setCartItems] = useState([])

    const cartClose = () => {
        const cart = document.querySelector('.cart-container')
        const cartBg = document.querySelector('.cart-bg')
        cart.classList.remove('open-cart')
        cart.classList.add('closed-cart')
        cartBg.classList.add('hidden')
    }

    const handleStorageChange = () => {
        setCartItems(JSON.parse(localStorage.getItem('cart')))   
    }

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cart')))
        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    const changeQuantity = (e, event) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let item = cart.find(item => item.name === e)

        event === "increase" ? item.quantity++ : item.quantity--

        localStorage.setItem('cart', JSON.stringify(cart))
        window.dispatchEvent(new Event('storage'))
    }

    const handleDelete = (e) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let item = cart.find(item => item.name === e)

        cart.splice(cart.indexOf(item), 1)

        if(cart.length === 0){
            localStorage.removeItem('cart')
        } else {
            localStorage.setItem('cart', JSON.stringify(cart))
        }

        window.dispatchEvent(new Event('storage'))
    }

    return (
        <>
            <div className="cart-container fixed top-0 right-[-100%] z-[500] h-full w-[35rem] bg-[#fff] px-8">
                <div className="cart flex flex-col w-full h-full">
                    <div className="cart-header flex justify-between mt-4">
                        <h1 className="text-2xl font-bold">Cart {cartItems ? (`(${cartItems.length})`) : null }</h1>
                        <div className="cart-close">
                            <button onClick={cartClose} className='font-bold text-xl'>X</button>
                        </div>
                    </div>
                    <div className="cart-items h-[70%] border-b-2 border-black border-dashed mt-4">
                        {
                            (cartItems === null) ? (
                                <div className="cart-empty flex flex-col justify-center items-center h-full">
                                    <h1 className="text-2xl font-bold">Your cart is empty</h1>
                                    <button onClick={cartClose} className="mt-4 bg-black text-white px-4 py-2 rounded-md">Continue Shopping</button>
                                </div>
                            ) : (
                                cartItems.map((item, index) => {
                                    return (
                                        <Link href={`/products/${item.link}`} key={index}>
                                            <div className="cart-item flex relative" key={index}>
                                                <div className="cart-item-image w-[25%]">
                                                    <Image src={item.image} width={500} height={500}/>
                                                </div>
                                                <div className="cart-item-details flex flex-col align-center justify-center w-[75%] px-4">
                                                    <h1 className="text-xl font-bold">{item.name}</h1>
                                                    <div className="cart-quantity-btns flex border border-black w-fit">
                                                        <button className="cart-quantity-btn" onClick={() => {if(item.quantity > 1){changeQuantity(item.name, "decrease")}}}>-</button>
                                                        <div className="cart-quantity-container flex items-center justify-center">
                                                            <div className="cart-quantity text-md">{item.quantity}</div>
                                                        </div>
                                                        <button className="cart-quantity-btn" onClick={() => changeQuantity(item.name, "increase")}>+</button>
                                                    </div>  
                                                    <p className="text-md font-bold">${Math.round(item.price * 100 * item.quantity) / 100}</p>
                                                </div>
                                                <div className="item-remove absolute bottom-4 right-4">
                                                    <button className="font-bold text-xl" onClick={() => {handleDelete(item.name)}}>X</button>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            )
                        }
                    </div>
                    <div className="checkout flex justify-between items-center mt-4">
                        <div className="checkout-total flex flex-col justify-between">
                            <h1 className="text-xl font-bold">Subtotal</h1>
                            <p className="text-xl font-bold">
                                {
                                    (cartItems === null) ? (
                                        "$0"
                                    ) : (
                                        "$" + Math.round(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * 100) / 100
                                    )
                                }
                            </p>
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
