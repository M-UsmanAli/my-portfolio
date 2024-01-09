'use client'
import React from 'react'
import {motion} from 'framer-motion';
const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-44 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black
       text-white p-8 shadow-black' whileHover={{scale:1.05}}>
        Web
      </motion.div>

    </div>
    </>
  )
}

export default Skills