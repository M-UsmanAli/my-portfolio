import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

interface Props {
    type: string,
    title: string,
    summary: string,
    img: any,
    link: string,
    github: string
}
const SmallProjects = ({ title, type, summary, img, link, github }: Props) => {
    return (
        <article className='w-full flex items-center justify-between 
        rounded-3xl border border-solid border-black bg-white shadow-2xl py-10 px-10'>
            <Link href={link} target='_blank' className='w-full overflow-hidden rounded-lg'>
                <Image src={img} alt={title} style={{
                    width: '520px',
                    height: '280px',
                    overflowClipMargin: 'hidden',
                    overflow: 'clip',
                    marginRight:'5px',
                }} 
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>

            <div className='w-full ml-5'>
                <div className='flex flex-col justify-start h-full'>
                    <span className='text-purple-800 font-extrabold text-4xl '>{type}</span>
                    <Link href={link} target='_blank' className='mt-5'>
                        <h1 className='mb-20 font-extrabold text-5xl '>{title}</h1>
                    </Link>
                    
                    <div className="mb-auto">
                        <Link href={github} target='_blank'>
                            <FaGithub />
                        </Link>
                        <Link href={github} target='_blank'>
                            Visit
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SmallProjects
