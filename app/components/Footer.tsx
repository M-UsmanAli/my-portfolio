import Link from 'next/link'
import React from 'react'

const year= new Date().getFullYear();
const Footer = () => {
    return (
        <div className=''>
            <footer className='flex item-center justify-between py-8
            w-full border-t-2 border-solid border-black gap-5 font-medium px-20'>
                <span>{year} &copy; All Rights Reserved.</span>
                <Link href=''>React Application</Link>
                <Link href=''>Hello World</Link>
            </footer>
        </div>
    )
}

export default Footer