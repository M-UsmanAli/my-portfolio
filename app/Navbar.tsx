'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './components/Logo'

const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 flex items-center justify-between'>
            <nav>
                {pageLinks.map(link =>
                    <Link key={link.href} href={link.href}>{link.label}</Link>
                )}
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav>
                {socialLinks.map(link=>
                    <Link key={link.href} href={link.href}>{link.label}</Link>
                )}
            </nav>
        </header>
    )
}
const pageLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/' },
    { label: 'Articles', href: '/' },
]

const socialLinks = [
    { label: 'FB', href: '/' },
    { label: 'Insta', href: '/' },
    { label: 'Twitter', href: '/' },
    { label: 'LinkedIn', href: '/' },
]
export default Navbar