import { FaExternalLinkAlt } from "react-icons/fa";

const HomeButtons = () => {
    return (
        <div className='flex items-center self-start gap-5 mt-5'>
            <a href='/Muhammad Usman Ali--CV.pdf' download='Muhammad Usman Ali--CV.pdf'
               className='flex items-center bg-black text-white p-2.5 px-6
                          rounded-lg text-lg font-semibold hover:bg-white hover:text-black
                          border border-solid border-transparent hover:border-black'>
                Resume <FaExternalLinkAlt className='ml-3'/>
            </a>
            <a href='mailto:aliusmanmuhammad98@gmail.com'
               className='text-lg font-medium capitalize text-black underline underline-offset-2'>
                Contact
            </a>
        </div>
    )
}

export default HomeButtons;
