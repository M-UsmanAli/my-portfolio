import Image from 'next/image'
import nextIcon from '../../public/bulb.svg'
const NextIcon = () => {
    return (
        <div className='absolute right-8 bottom-1 inline-block w-24'>
            <Image src={nextIcon} alt='NextIcon' className='w-auto'/>
        </div>
    )
}

export default NextIcon