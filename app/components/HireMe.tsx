import Image from 'next/image'
import Link from 'next/link'
import imageHireMe from '../../public/HireMe.png'
const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-auto flex items-center justify-center relative'>
                <Image src={imageHireMe} alt='HireMe' className='fill-black animate-spin-slow' />
                <Link href='https://www.upwork.com/freelancers/~017b90eda5610cdaca?viewMode=1' className='flex items-center justify-center absolute 
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 bg-black text-white shadow-md border border-solid border-black
                w-20 h-20 rounded-full font-semibold  hover:bg-white hover:text-black'>
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export default HireMe