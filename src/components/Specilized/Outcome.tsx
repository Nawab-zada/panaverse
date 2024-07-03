import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import Outcomem from '@/assets/images/outcome-poster.webp'
const outcomespoint=[
    "Product Ownership ","Freelacing " ,"Global Marketing by Panaverse DAO","Boosting Economy."

    
]
export const Outcome = () => {
    const headers=" The &#39 Outcome for Participants  of the Program"
  return (
    <section>
        <Wrapper>
                <div className='flex  gap-x-6 mt-20 md:mt-35'>


                   <div className='flex-1'>
                         <Image src={Outcomem} alt='outcome'/>
                   </div>

                     <div className='flex-1'>.
                     <h2 className=' text-2xl font-bold whitespace-pre-line '>
                     {headers}
                     </h2>
                     <p className='mt-4 text-slate-700 text-sm '>
                     As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.
                     </p>
                     <div className='mt-6 grid grid-cols-2 gap-x-2' >
                        {outcomespoint.map((item)=>
                            
                            <div className=' mt-6 mr-2 px-3'>
                              <h3 className='font-medium  '>
                                {item}
                              </h3>

                            </div>

                        )}
                     </div>
                     </div>
                </div>




        </Wrapper>

    </section>
  )
}
