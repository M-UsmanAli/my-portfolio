import { Metadata } from "next";
import Image from "next/image";
import developerImage from '../public/developer-pic-1.webp';
import AnimatedHomeText from "./components/AnimatedHomeText";
import HireMe from "./components/HireMe";
import HomeButtons from "./components/HomeButtons";
import HomeParagraph from "./components/HomeParagraph";
import NextIcon from "./components/NextIcon";
export default function Home() {
  return (
    <div>
      <div className="flex gap-5">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={developerImage} alt="developer" className="w-full h-auto pt-0" priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
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

export const metadata: Metadata={
  title:'My Portfolio - Home'
}