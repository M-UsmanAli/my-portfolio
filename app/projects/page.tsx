import React from 'react'
import AnimatedHomeText from '../components/AnimatedHomeText'

const page = () => {
    return (
        <> 
            <div className="flex w-full flex-col items-center justify-center mb-10">
                <main>
                    <div className="my-10">
                        <AnimatedHomeText text="Digital Creations!" />
                    </div>
                    <div className='grid grid-cols-12 gap-24 '>
                        <div className='col-span-12'>
                            Featured Projects!
                        </div>
                        <div className='col-span-6'>
                            Project-1!
                        </div>
                        <div className='col-span-6'>
                            Project-2!
                        </div>

                        <div className='col-span-12'>
                            Featured Projects!
                        </div>
                        <div className='col-span-6'>
                            Project-1!
                        </div>
                        <div className='col-span-6'>
                            Project-2!
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default page