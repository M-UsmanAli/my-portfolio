'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './components/Logo'
import SocialMediaIcons from './components/SocialMediaIcons'

const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 flex items-center justify-between'>
            <nav>
                {pageLinks.map(link =>
                    <Link className='mx-4 hover:text-amber-400' key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                )}
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav>
                <SocialMediaIcons facebook={''} instagram={''} linkedin={''} twitter={''} />
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