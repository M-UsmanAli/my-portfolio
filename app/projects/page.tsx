import { Metadata } from 'next'
import issueTrackerImg from '../../public/issuetrackerimg.png'
import physionics from '../../public/physionics.png'
import shopping from '../../public/shopping.png'
import weather from '../../public/weather.png'
import AnimatedHomeText from '../components/AnimatedHomeText'
import FeaturedProjects from './_components/FeaturedProjects'
import SmallProjects from './_components/SmallProjects'
const page = () => {
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center mb-10 px-12">
                <main>
                    <div className="my-10">
                        <AnimatedHomeText text="Digital Creations!" />
                    </div>
                    <div className='grid grid-cols-12 gap-24 '>
                        <div className='col-span-12 '>
                            <FeaturedProjects
                                title='Issue Tracker'
                                summary="Introducing my project, the 'Issue Tracker' - a powerful tool designed to streamline project management. With a user-friendly interface, it allows teams to effortlessly track and manage issues throughout the development lifecycle. From identifying and prioritizing tasks to monitoring progress, the Issue Tracker enhances collaboration and ensures a smoother workflow. Dive into my portfolio to explore this project and witness how it can elevate your project management experience"
                                link='https://github.com/M-UsmanAli/issue-tracker'
                                type='Featured Projects!'
                                github='https://github.com/M-UsmanAli/issue-tracker'
                                img={issueTrackerImg}
                            />
                        </div>
                        <div className='col-span-6'>
                            <SmallProjects
                                title='Fitness App'
                                summary="Introducing my project, the 'Issue Tracker' - a powerful tool designed to streamline project management. With a user-friendly interface, it allows teams to effortlessly track and manage issues throughout the development lifecycle. From identifying and prioritizing tasks to monitoring progress, the Issue Tracker enhances collaboration and ensures a smoother workflow. Dive into my portfolio to explore this project and witness how it can elevate your project management experience"
                                link='/'
                                type='Featured Projects!'
                                github='/'
                                img={physionics}
                            />
                        </div>

                        <div className='col-span-6'>
                            <SmallProjects
                                title='Shopping Store'
                                summary="Introducing my project, the 'Issue Tracker' - a powerful tool designed to streamline project management. With a user-friendly interface, it allows teams to effortlessly track and manage issues throughout the development lifecycle. From identifying and prioritizing tasks to monitoring progress, the Issue Tracker enhances collaboration and ensures a smoother workflow. Dive into my portfolio to explore this project and witness how it can elevate your project management experience"
                                link='/'
                                type='Featured Projects!'
                                github='/'
                                img={shopping}
                            />
                        </div>

                        <div className='col-span-12 '>
                            <FeaturedProjects
                                title='Weather App'
                                summary="Introducing my React Weather app, a sleek and intuitive tool designed to provide real-time weather updates with ease. With a clean and minimalist interface, users can effortlessly check the current weather conditions, forecasts, and more, all powered by reliable data sources. Whether planning a weekend getaway or simply staying informed about the day ahead, my React Weather app offers a seamless experience for staying connected to the ever-changing elements."
                                link='https://github.com/M-UsmanAli/weather-forecast'
                                type='Featured Projects!'
                                github='https://github.com/M-UsmanAli/weather-forecast'
                                img={weather}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export const metadata: Metadata={
    title:'My Portfolio - Projects'
  }
export default page