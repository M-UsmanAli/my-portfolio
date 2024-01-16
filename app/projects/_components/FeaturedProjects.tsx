import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

interface Props {
    type: string,
    title: string,
    summary: string,
    img: string,
    link: string,
    github: string
}
const FeaturedProjects = ({ title, type, summary, img, link, github }: Props) => {
    return (
        <article>
            <Link href={link} target='_blank'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className=''>
                <span>{type}</span>
                <Link href={link} target='_blank'>
                    <h2>{title}</h2>
                </Link>
                <p>{summary}</p>
                <div>
                <Link href={github} target='_blank'>
                    <FaGithub/>
                </Link>
                <Link href={github} target='_blank'>
                    Visit the Project
                </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProjects