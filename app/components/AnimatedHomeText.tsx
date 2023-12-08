import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    text: String
}
const AnimatedHomeText = ({ text }: { text: String }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center
        overflow-hidden'>
            <h1 className='inline-block w-full text-black font-bold capitalize text-6xl !text-left'>
                {text}
            </h1>

        </div>
    )
}

export default AnimatedHomeText