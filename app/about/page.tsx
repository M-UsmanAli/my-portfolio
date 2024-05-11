import { Metadata } from 'next';
import Image from 'next/image';
import profilepic from '../../public/two.jpg';
import AnimatedHomeText from '../components/AnimatedHomeText';
import Biography from './_components/Biography';
import ExperienceDetails from './_components/ExperienceDetails';
import Skills from './_components/Skills';

const AboutPage = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center mb-10">
        <main>
          <div className="my-10">
            <AnimatedHomeText text="Passion Fuels Purpose!" />
          </div>
        </main>
        <div className="mx-10">
          <div className="grid w-full grid-cols-3 gap-10 relative">

            <div className="col-span-1 flex flex-col items-start justify-start ml-5">
              <h2 className="mb-4 text-lg font-bold uppercase text-black-75">
                Biography
              </h2>
              <Biography />
            </div>

            <div className="col-span-1 flex items-center justify-center">
              <div className="relative w-full h-[500px] rounded-2xl border-2 border-solid border-black bg-white p-2">
                <Image
                  src={profilepic}
                  alt="profile pic"
                  className=" object-cover w-full h-full rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="col-span-1 flex flex-col items-end justify-start ml-5 mx-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black-75">
                Projects Details
              </h2>
              <ExperienceDetails />
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export const metadata: Metadata={
  title:'My Portfolio - About'
}

export default AboutPage;
