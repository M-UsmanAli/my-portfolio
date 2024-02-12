import React from 'react'
import nextIcon from '../../public/bulb.svg'
import Image from 'next/image'
const NextIcon = () => {
    return (
        <div className='absolute right-8 bottom-1 inline-block w-24'>
            <Image src={nextIcon} alt='NextIcon' className='w-auto h-auto'/>
        </div>
    )
}

export default NextIcon