import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
const HomeButtons = () => {
    return (
        <div className='flex items-center self-start gap-5 mt-5'>
            <Link href='/resume.pdf' 
            className='flex items-center bg-black text-white p-2.5 px-6
            rounded-lg text-lg font-semibold hover:bg-white hover:text-black
            border border-solid border-transparent hover:border-black'>
                Resume <FaExternalLinkAlt className='ml-3'/>
            </Link>
            <Link href='mailto:aliusmanmuhammad98@gmail.com'
            className='ml-4 text-lg font-medium capitalize text-black underline'>
                Contact</Link>
        </div>
    )
}

export default HomeButtons