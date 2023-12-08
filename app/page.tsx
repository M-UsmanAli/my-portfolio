import Image from "next/image";
import developerImage from '../public/developer_image-removebg-preview.png'
import AnimatedHomeText from "./components/AnimatedHomeText";
export default function Home() {
  return (
    <div>
      <div className="flex gap-5 ml-20 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={developerImage} alt="developer" className="w-full h-auto pt-0" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedHomeText text="Crafting Experiences, Shaping Tomorrow"/>
            <p className="mr-9 text-justify">
              Welcome to my world of React development, where I merge creativity with technology to
              build immersive web experiences. I'm Muhammad Usman Ali, a dedicated developer driven by a
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
