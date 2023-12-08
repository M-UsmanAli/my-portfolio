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
            <h1>React Application Development</h1>
          </div>
        </div>
      </div>

    </div>
  )
}
