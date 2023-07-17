import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bannerImg from '@/public/banner/banner1.jpg'

export default function Banner() {
  return (
    <section className="banner mt-24">
        <div className="container">
            <div className="banner-container flex justify-between overflow-hidden h-[25rem]">
                <div className="banner-text bg-[#e9e9e9] flex flex-col justify-center px-24 text-start w-1/2">
                    <h2 className='font-bold text-2xl mb-2'>Creative living starts here</h2>
                    <p>Harmoni products are all made to standard sizes so that you can mix and match them freely</p>
                    <Link href="/products" className='mt-4 w-fit'>
                        <button className="banner-btn">SHOP NOW</button>
                    </Link>
                </div>
                <div className="banner-img w-1/2">
                    <Image src={bannerImg} alt="banner" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    </section>
  )
}
