import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className=''></div>
        </article>
    )
}

export default FeaturedProjects