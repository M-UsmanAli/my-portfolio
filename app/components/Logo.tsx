'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink=motion(Link)
const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href='/' 
            className='w-16 h-16 bg-black text-white rounded-full 
            flex items-center justify-center text-2xl font-bold'
            whileHover={{
                backgroundColor:'brown',
                scale:1.2
            }}
            >
                U.A
            </MotionLink>
        </div>
    )
}

export default Logo