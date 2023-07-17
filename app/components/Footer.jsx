import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='footer bg-[#000] flex flex-col gap-8 py-16 justify-center items-center mt-24'>
        <div className="footer-links flex text-white gap-4">
            <Link href="/about">About</Link>
            <Link href="/locate">Store locator</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <p className="credit text-white">
            <span>Created by </span>
            <Link href="https://github.com/sezergumus" target='_blank'>Sezer</Link>
        </p>
    </footer>
  )
}
