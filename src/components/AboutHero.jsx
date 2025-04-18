import React from 'react'

import photo from "../public/crowd.jpg"
import i1 from '../public/imageOne.JPG'
import i2 from '../public/imageTwo.JPG'
import i3 from '../public/imageThree.JPG'

export const AboutHero = () => {
  return (
    <section className='min-h-full bg-blue-50 min-w-screen'>
        {/* hero section */}
        <div className='w-full flex gap-2 h-full p-6 '>
            <div className='w-2/3  gap-4 flex flex-col'>
               <h1 className='text-3xl font-semibold'>InnoWave X College Societies</h1>
                <p className='text-lg'>
                InnoWave is a dynamic platform designed to empower college societies by providing comprehensive support for their events and community-building efforts. It offers end-to-end assistance, including planning, funding, logistics, and access to a diverse network of speakers and performers. By simplifying these processes, InnoWave enables student organizations to focus on innovation and engagement. The platform also helps societies secure sponsorships, strengthen their digital presence, and boost event visibility across campuses. In addition, it facilitates meaningful collaborations with brands, artists, and professionals to elevate the quality and reach of student-led initiatives. Whether it’s a cultural festival, workshop, or awareness campaign, InnoWave serves as a reliable partner in bringing ideas to life and fostering a vibrant, interconnected campus ecosystem. 
                
                </p>
                <div className='grid grid-cols-3 gap-2 mt-3'>
                    <div>
                        <img className='rounded-lg' src={i1} alt="pic1" />
                    </div>
                    <div>
                        <img className='rounded-lg' src={i2} alt="pic1" />
                    </div>
                    <div>
                        <img className='rounded-lg' src={i3} alt="pic1" />
                    </div>
                </div>
            </div>
            <div className='w-1/3 flex  justify-center  '>
            <img className='h-3/4 object-cover rounded-lg ' src={photo} alt="crowd" />
            </div>
        </div>
    </section> 
  )
}
