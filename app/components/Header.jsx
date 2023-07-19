"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [quantity, setQuantity] = useState(null)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'))

    if(cart){
      setQuantity(cart.length)
    } else {
      setQuantity(0)
    }
  }, [])

  // if scrolled any add class to navbar
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.nav-container')
      navbar.classList.toggle('scrolled', window.scrollY > 0)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        const navbar = document.querySelector('.nav-container')
        navbar.classList.toggle('scrolled', window.scrollY > 0)
      })
    }
  }, [])

  const openCart = () => {
    const cartMenu = document.querySelector('.cart-container')
    const cartBg = document.querySelector('.cart-bg')
    cartMenu.classList.remove('closed-cart')
    cartMenu.classList.add('open-cart')
    cartBg.classList.toggle('hidden')
  }

  const checkItems = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))

    if(cart){
      setQuantity(cart.length)
    } else {
      setQuantity(0)
    }
  }

  useEffect(() => {
    checkItems()

    window.addEventListener('storage', () => {
      checkItems()
    })
    
    return () => {
      window.removeEventListener('storage', () => {
        checkItems()
      })
    }
  }, [])

  return (
    <nav className="navbar sticky z-50 w-full top-0 bg-[#fff]">
      <div className="container">
        <div className="nav-container flex flex-row items-center justify-between h-36">
          <Link href="/">
            <svg width="64" height="64" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H26H52V52H0V0Z" fill="#FF0000"/>
              <path d="M41.168 32.864C41.4453 32.864 41.6587 32.992 41.808 33.248C41.9787 33.504 42.064 33.856 42.064 34.304C42.064 35.136 41.8613 35.7973 41.456 36.288C39.344 38.8693 37.0933 40.16 34.704 40.16C32.6347 40.16 30.9813 39.36 29.744 37.76C28.5067 36.16 27.888 33.8667 27.888 30.88C27.888 30.1547 27.92 29.4293 27.984 28.704C26.576 28.96 25.04 29.152 23.376 29.28C22.2667 29.3653 21.5093 29.4187 21.104 29.44C20.6773 31.616 20.08 34.2827 19.312 37.44C18.864 39.296 18.0107 40.224 16.752 40.224C15.3867 40.224 14.704 39.6053 14.704 38.368C14.704 38.0907 14.7573 37.7067 14.864 37.216C15.5893 34.2933 16.1653 31.8187 16.592 29.792L15.056 29.856C14.352 29.856 13.84 29.7387 13.52 29.504C13.2 29.248 13.04 28.8427 13.04 28.288C13.04 27.584 13.2427 27.072 13.648 26.752C14.0533 26.4107 14.7253 26.2187 15.664 26.176L17.36 26.112C17.9147 23.104 18.192 20.8107 18.192 19.232C18.192 18.2293 18.0427 17.5467 17.744 17.184C17.4453 16.8213 17.0507 16.64 16.56 16.64C15.0667 16.64 13.3813 17.888 11.504 20.384C11.2267 20.7467 10.9173 20.928 10.576 20.928C10.2773 20.928 10.0213 20.7893 9.808 20.512C9.59467 20.2347 9.488 19.8827 9.488 19.456C9.488 18.7947 9.75467 18.0907 10.288 17.344C11.2267 16.0427 12.4107 14.976 13.84 14.144C15.2693 13.2907 16.72 12.864 18.192 12.864C19.5787 12.864 20.6453 13.344 21.392 14.304C22.16 15.2427 22.544 16.7147 22.544 18.72C22.544 20.4907 22.288 22.8907 21.776 25.92L24.912 25.76C26.256 25.696 27.408 25.5893 28.368 25.44C28.752 23.0933 29.3387 20.896 30.128 18.848C30.9173 16.8 31.8987 15.136 33.072 13.856C34.2453 12.576 35.5573 11.936 37.008 11.936C38.0747 11.936 38.9173 12.3627 39.536 13.216C40.1547 14.048 40.464 15.1467 40.464 16.512C40.464 21.8027 37.7653 25.472 32.368 27.52C32.304 28.3733 32.272 29.2587 32.272 30.176C32.272 32.416 32.5493 34.0053 33.104 34.944C33.6587 35.8827 34.4373 36.352 35.44 36.352C36.3147 36.352 37.1147 36.128 37.84 35.68C38.5653 35.2107 39.3867 34.4213 40.304 33.312C40.56 33.0133 40.848 32.864 41.168 32.864ZM36.848 14.72C36.3787 14.72 35.8773 15.1467 35.344 16C34.832 16.8533 34.3413 18.016 33.872 19.488C33.4027 20.96 33.0293 22.5707 32.752 24.32C34.4587 23.616 35.7173 22.6133 36.528 21.312C37.3387 20.0107 37.744 18.336 37.744 16.288C37.744 15.7973 37.6587 15.4133 37.488 15.136C37.3173 14.8587 37.104 14.72 36.848 14.72Z" fill="white"/>
            </svg>
          </Link>
          <div className="nav-links flex gap-4 items-center">
            <Link href="/products">
              PRODUCTS
            </Link>
            <button id="cart" aria-label="cart" onClick={openCart} className='relative'>
              <svg className="cursor-pointer" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.02827 18.7421C7.89085 18.7421 8.59011 18.0428 8.59011 17.1802C8.59011 16.3177 7.89085 15.6184 7.02827 15.6184C6.16569 15.6184 5.46643 16.3177 5.46643 17.1802C5.46643 18.0428 6.16569 18.7421 7.02827 18.7421Z" fill="black"/>
                <path d="M17.9612 18.7421C18.8237 18.7421 19.523 18.0428 19.523 17.1802C19.523 16.3177 18.8237 15.6184 17.9612 15.6184C17.0986 15.6184 16.3993 16.3177 16.3993 17.1802C16.3993 18.0428 17.0986 18.7421 17.9612 18.7421Z" fill="black"/>
                <path d="M20.7334 2.77129C20.6237 2.63709 20.4855 2.52901 20.3288 2.45489C20.1721 2.38076 20.0009 2.34246 19.8275 2.34276H4.97299L4.6738 0.645235C4.6419 0.464417 4.5473 0.300622 4.40663 0.182622C4.26596 0.0646212 4.08821 -3.85781e-05 3.9046 1.72682e-08H0.780919C0.573807 1.72682e-08 0.375177 0.0822754 0.228726 0.228726C0.0822752 0.375177 0 0.573807 0 0.780919C0 0.988032 0.0822752 1.18666 0.228726 1.33311C0.375177 1.47956 0.573807 1.56184 0.780919 1.56184H3.2496L5.47815 14.1922C5.51005 14.3731 5.60465 14.5368 5.74532 14.6548C5.88599 14.7728 6.06374 14.8375 6.24735 14.8375H18.7421C18.9492 14.8375 19.1478 14.7552 19.2943 14.6087C19.4407 14.4623 19.523 14.2637 19.523 14.0565C19.523 13.8494 19.4407 13.6508 19.2943 13.5044C19.1478 13.3579 18.9492 13.2756 18.7421 13.2756H6.90235L6.62708 11.7138H18.4219C18.6927 11.7134 18.9551 11.6195 19.1646 11.448C19.3742 11.2764 19.518 11.0377 19.5718 10.7723L20.9774 3.74402C21.0113 3.57393 21.007 3.39844 20.9648 3.23022C20.9226 3.062 20.8436 2.90525 20.7334 2.77129Z" fill="black"/>
              </svg>
              {
                quantity > 0 && (
                  <div className="cart-quantity-icon bg-[#FF0000] rounded-full w-4 h-4 text-white absolute top-[-8px] right-[-8px] text-xs font-bold">
                    <span className="cart-quantity">{quantity}</span>
                  </div>
                )
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
