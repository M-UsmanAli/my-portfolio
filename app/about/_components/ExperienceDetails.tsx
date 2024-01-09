'use client'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const ExperienceDetails = () => {
    return (
        <>
            <div className='flex flex-col items-end justify-center mb-20'>
                <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={50}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75'>satisfied clients</h2>
            </div>
            <div className='flex flex-col items-end justify-center mb-20'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={30}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75'>projects completed</h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={1.5}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-black/75'>years of experience</h2>
            </div>
        </>
    )
}

export default ExperienceDetails

interface AnimatedNumbersProps {
    value: any;
  }
  const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
    const ref = useRef<HTMLSpanElement>(null); // Explicitly define the type of ref
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
      return () => {};
    }, [isInView, value, motionValue]);
  
    useEffect(() => {
      springValue.on('change', (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);
  
    return <span ref={ref}></span>;
  };