"use client"

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className='footer bg-[#000] flex flex-col gap-8 py-16 justify-center items-center mt-24'>
        <div className="footer-links flex text-white gap-4">
            <div className='cursor-pointer' onClick={handleClick}>About</div>
            <div className='cursor-pointer' onClick={handleClick}>Store locator</div>
            <div className='cursor-pointer' onClick={handleClick}>FAQs</div>
            <div className='cursor-pointer' onClick={handleClick}>Contact</div>
        </div>
        <p className="credit text-white">
            <span>Created by </span>
            <Link href="https://github.com/sezergumus" target='_blank'>Sezer</Link>
        </p>
    </footer>
  )
}
