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
const FeaturedProjects = ({ title, type, summary, img, link, github }: Props) => {
    return (
        <article className='w-full flex items-center justify-between 
        rounded-3xl border border-solid border-black bg-white shadow-2xl py-10 px-10'>
            <Link href={link} target='_blank' className='w-1/2 overflow-hidden rounded-lg'>
                <Image src={img} alt={title} style={{
                    width: '520px',
                    height: '280px',
                    overflowClipMargin: 'content-box',
                    overflow: 'clip',
                    marginRight: '5px',
                }} />
            </Link>

            <div className='w-1/2 flex flex-col item-start justify-between ml-5'>
                <span className='text-purple-800 font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank'>
                    <h2 className='font-extrabold text-3xl '>{title}</h2>
                </Link>
                <p>{summary}</p>
                <div>
                    <Link href={github} target='_blank' className='mt-3 font-extrabold'>
                        <FaGithub />
                    </Link>
                    <Link href={github} target='_blank' className='font-extrabold'>
                        Visit the Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProjects