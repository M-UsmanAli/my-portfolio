'use client'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from './components/Logo';
const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 flex items-center justify-between'>
            <nav>
                {pageLinks.map((link, index) =>
                    <Link className='mx-9 hover:text-amber-400' key={index} href={link.href}>
                        {link.label}
                    </Link>
                )}
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav className='flex'>
                <Link href='https://www.facebook.com/muhammadusman.ali.5688476?sfnsn=scwspwa&mibextid=RUbZ1f' className='mr-20' ><FaFacebook size={20} /></Link>
                <Link href='https://www.instagram.com/m.usmanalee/' className='mr-20'><FaInstagram size={20} /></Link>
                <Link href='https://www.linkedin.com/in/muhammad-usman-ali-78713b1b8' ><FaLinkedin size={20} /></Link>
            </nav>
        </header>
    )
}
const pageLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },

]

export default Navbar