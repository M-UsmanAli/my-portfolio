'use client'
import React from 'react'
import { motion } from 'framer-motion';


const Skills = () => {

  return (
    <>
      <h2 className='font-bold text-8xl mt-44 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black
       text-white p-8 shadow-black' whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill name="HTML" x="-15vw" y="0vw"/>
        <Skill name="CSS" x="15vw" y="0vw"/>
        <Skill name="PHP" x="0vw" y="-12vw"/>
        <Skill name="JAVASCRIPT" x="0vw" y="12vw"/>
        <Skill name="REACT JS" x="-18vw" y="13vw"/>
        <Skill name="NEXT JS" x="15vw" y="-15vw"/>
        <Skill name="NEST JS" x="15vw" y="13vw"/>
        <Skill name="MYSQL" x="-17vw" y="-14vw"/>
        <Skill name="WORDPRESS" x="-30vw" y="0vw"/>
        <Skill name="MONGOOSE" x="30vw" y="0vw"/>
        <Skill name="TAILWIND CSS" x="0vw" y="24.5vw"/>
        <Skill name="RADIX UI" x="0vw" y="-24.5vw"/>
      </div>
    </>
  )
}

export default Skills

interface SkillProps{
  name:String,
  x:any,
  y:any
}

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black
    text-white p-8 shadow-black py-3 px-6 absolute' whileHover={{ scale: 1.05 }} 
    initial={{x:0,y:0}} whileInView={{x:x,y:y}} transition={{duration:1.5}} viewport={{once:true}}>
    {name}
    </motion.div>
  );
}


