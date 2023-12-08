import Image from "next/image";
import developerImage from '../public/developer_image-removebg-preview.png'
export default function Home() {
  return (
    <div>
      <div className="flex gap-5 ml-20 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={developerImage} alt="developer" className="w-full h-auto pt-0" />
          </div>
          <div className="w-1/2">
            <h1>Crafting Experiences, Shaping Tomorrow</h1>
            <p>
              Welcome to my world of React development, where I merge creativity with technology to
              build immersive web experiences. I'm [Your Name], a dedicated developer driven by a
              passion for innovation and a commitment to excellence. With a strong foundation in
              React, I bring ideas to life, creating applications that leave a lasting impact.
              Explore my portfolio and witness the art of digital transformation.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
