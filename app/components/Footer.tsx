import Link from 'next/link';

const year= new Date().getFullYear();
const Footer = () => {
    return (
        <div className=''>
            <footer className='flex item-center justify-between py-8
            w-full border-t-2 border-solid border-black gap-5 font-medium px-20'>
                <span>{year} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>Built With
                <span className='text-red-700 text-2xl px-1'>&hearts;</span>by&nbsp;
                <Link href='' className='underline underline-offset-2'>Muhammad Usman Ali</Link></div>
                <Link href='' className='underline underline-offset-2'>Say Hello!</Link>
            </footer>
        </div>
    )
}

export default Footer