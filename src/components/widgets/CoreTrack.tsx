import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '@/components/shared/Button'
import { Quarter } from '@/components/shared/Quarter'
const CoreTrackdata =[
  { 
header:"Quarter1",
descripation:"Cs-101:Object-oriented programming using TypeScript",
number:1
  },
  { 
header:"Quarter11",
descripation:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development kit(CDK) for terraform",
number:2
  },
  { 
header:"Quarter111",
descripation:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
number:3
  },

]

const CoreTrack = () => {
    const header =`Core Courses \n(Common in All Specializations)` 
  return (
    <Wrapper>
        <section className='mt-4 lg:mt-6'>
            <div className='max-w-screen-md'>
                <h4 className='text-teal-800 font-bold text-lg sm:min-width:320 mt-4'>
                Program of Studies
                </h4>
                <h2 className='text-4xl font-bold whitespace-pre'>
            {header}
                </h2>
                <p className='mt-3  text-slate-700 flex-1'>
                Every participant of the program will start by completing the following three core courses.


                </p>
                <div className='mt-3'>
                    <Button text='Enroll Now'/>
                </div >
                <div className='flex mt-5 gap-3 flex-col md:flex-row  px-13 py-30  gap-y-5  'key={header}>
    {CoreTrackdata.map((item ,i)=>{
   
                    return(
                      
                     <div >

<Quarter key={header} descripation={item.descripation}header={item.header} number={item.number} />
                       
                     </div>
  
  
                      
                    )
                  })}

                  
                      
                </div>
            </div>
        </section>
        </Wrapper>

  )
}

export default CoreTrack