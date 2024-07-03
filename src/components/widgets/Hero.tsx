import React from 'react'
import { Wrapper } from '@/components/shared/Wrapper'
import Heroposter from '@/assets/images/hero-poster.webp'
import Image from 'next/image'
import Button from '@/components/shared/Button'
const Hero = () => {
  return (
    <Wrapper>
        <section>
        <div className='max-w-screen-xl flex-col flex items-center md:flex-row'>
        <div className='flex-1'>
         <h4 className='text-teal-800 font-bold text-lg  sm:min-width:320 mt-4 '>
         Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
         </h4>
          <h1 className='text-5xl font-semibold md:text-red-500 lg:text-blue-400 sm:text- 6xl'>Certified Web 3.0 and Metaverse Developer</h1>
          <p className='mt-4 text-lg text-slate-700 flex-1'>
          A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
          </p>
          <p className='flex-1'>
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatic Technologies
          </p>
          <div className='mt-4'>
          <Button text={'Learn more'}/>
          
           
          </div>
        </div>
        <div className='flex-1'>
            <Image src={Heroposter} alt='heroposter'/>
        </div>
        </div>
        </section>
        
    </Wrapper>
   
  )
}
    
export default Hero