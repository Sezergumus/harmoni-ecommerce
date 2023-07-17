import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import homeImg from '@/public/hero/hero-img-1.jpg'
import homeImg2 from '@/public/hero/hero-img-2.jpg'
import homeImg3 from '@/public/hero/hero-img-3.jpg'
import homeImg4 from '@/public/hero/hero-img-4.jpg'

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="container">
        <div className="home-grid">
          <div className="home-grid-one">
            <Link href="/products">
              <Image src={homeImg} alt="hero-1"/>
              <p className="main-description">Furnitures</p>
            </Link>
          </div>
          <div className="home-grid-two">
            <Link href="/products">
              <Image src={homeImg2} alt="hero-2"/>
              <p className="main-description">Skincare</p>
            </Link>
          </div>
          <div className="home-grid-three">
            <Link href="/products">
              <Image src={homeImg3} alt="hero-3"/>
              <p className="main-description">Kitchen</p>
            </Link>
          </div>
          <div className="home-grid-four">
            <Link href="/products">
              <Image src={homeImg4} alt="hero-4"/>
              <p className="main-description">Electronics</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
