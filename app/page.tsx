import Image from "next/image";
import developerImage from '../public/developer_image-removebg-preview.png'
import AnimatedHomeText from "./components/AnimatedHomeText";
import HomeButtons from "./components/HomeButtons";
import HomeParagraph from "./components/HomeParagraph";
import HireMe from "./components/HireMe";
import NextIcon from "./components/NextIcon";
export default function Home() {
  return (
    <div>
      <div className="flex gap-5">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={developerImage} alt="developer" className="w-full h-auto pt-0" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center mr-10">
            <AnimatedHomeText text="Crafting Experiences, Shaping Tomorrow"/>
            <HomeParagraph/>
            <HomeButtons/>
          </div>
        </div>
      </div>
      <HireMe/>
      <NextIcon/>
    </div>
  )
}
