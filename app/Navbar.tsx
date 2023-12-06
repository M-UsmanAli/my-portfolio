'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './components/Logo'

const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 flex items-center justify-between'>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Projects</Link>
                <Link href='/'>Articles</Link>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav>
                <Link href='/'>FB</Link>
                <Link href='/'>Insta</Link>
                <Link href='/'>Twitter</Link>
                <Link href='/'>LinkedIn</Link>
            </nav>
        </header>
    )
}

export default Navbar