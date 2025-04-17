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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam unde modi quos incidunt deserunt iusto nobis tempore tempora itaque rem quod quo repudiandae totam, inventore, veritatis alias voluptas illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate impedit sit possimus illo perferendis quisquam, harum inventore voluptates mollitia, porro voluptatum tempora aliquam fuga ullam similique quia at? Officiis, reiciendis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa praesentium magnam accusantium provident dicta laudantium possimus fugit ipsam unde culpa dolorum vero porro velit, totam molestiae nihil error quasi?
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
