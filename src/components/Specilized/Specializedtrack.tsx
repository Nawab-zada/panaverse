"use client"
import Button from '../shared/Button'



import Wrapper from '../shared/Wrapper'
import { Quarter } from '@/components/shared/Quarter'
import Image from 'next/image'
//images
import { useState } from 'react'
import metaverse from '@/assets/images/metaverse.webp'
import Aiimage  from '@/assets/images/ai.webp'



export const Specializedtrack = () => {
   
     
      
  
        

  const paragraph='After completing the first three quarters the participants will select one or more\n specializations consisting of two courses each.'
  const header='Web 3.0 (Blockchain) and Metaverse Specialization'

       var data=[

            {
               header:"Web 3.0 (Blockchain) and Metaverse Specialization",

               descripation:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
               image:metaverse,
               quaters:[
                  { slug:"wmd", 
                     header:"Quarter iv",
                     descripation:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                     number:4
                  },
                  {
                     header:"Quarter v",
                     descripation:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                     number:4
                  }
               ]

               
         
               
            },
            {   
               slug:"ai",
               header:"Artificial Intelligence (AI) and Deep Learning Specialization",

               descripation:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
               image:Aiimage,
               quaters:[
                  {
                     header:"Quarter iv",
                     descripation:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                     number:4
                  },
                  {
                     header:"Quarter v",
                     descripation:"AI-361: Deep Learning and MLOps",
                     number:5
                  }
               ]

               
         
               
            },
            {   
               slug:"ai",
               header:"Artificial Intelligence (AI) and Deep Learning Specialization",

               descripation:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
               image:Aiimage,
               quaters:[
                  {
                     header:"Quarter iv",
                     descripation:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                     number:4
                  },
                  {
                     header:"Quarter v",
                     descripation:"AI-361: Deep Learning and MLOps",
                     number:5
                  }
               ]

               
         
               
            },
            {   
               slug:"ai",
               header:"Artificial Intelligence (AI) and Deep Learning Specialization",

               descripation:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
               image:Aiimage,
               quaters:[
                  {
                     header:"Quarter iv",
                     descripation:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                     number:4
                  },
                  {
                     header:"Quarter v",
                     descripation:"AI-361: Deep Learning and MLOps",
                     number:5
                  }
               ]

               
         
               
            }


      ]
     
         
      
  return (
             <section className=''>
              
            <Wrapper> 
               
           <div className='flex  gap-2'>
          
            
            <div className='bg-white shadow-xl rounded-xl border border-slate-200 basis-8/12 '>
               
              <h4 className=' text-teal-800  px-3 '>
              Specialized Track
              </h4>
              <h3 className=' font-semibold  px-3'>
           {header}
              </h3>
              <p className=' text-slate-600 mt-2 px-3'>
              This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                
                
                 </p>
           <div className='px-3 pt-0'>  <button className=' text-teal-800 border border-teal-800 px-5 py-2 rounded-md hover:bg-slate-300 duration-300 font-semibold  mt-4 '> Learn More
              </button></div>

              
              <div className='flex gap-3 mx-2 py-2 px-3 basis-8/12 '>
               <Quarter descripation='W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps'     
                  header='Quarter IV'
                   number={4}
                   haveboreder={false}
               />
               <Quarter descripation='MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences'     
                  header='Quarter V'
                   number={5}
                   haveboreder={false}
               />
              
              </div>
              </div>

              <div className='px-6  space-y-4  py-6  flex-col lg:flex-row  basis-4/12 '>
            {data.map((item,i )=>
               <div key={item.slug}  className='flex' >
                    <div className=' '>
                 <Image src={item.image} alt={"meta"} className='h-24 object-cover rounded-md flex-shrink-0 w-20'/>
                 </div>
                  <div className='mx-3 w-full'>
                   <h4 className='text-teal-800 '>
                   Specialized Track
                   </h4>
                   <p className='text-sm '>
                   {item.header}
                   </p>
                   </div>
                 </div>
                 
            )
           }
                 </div>
                </div>
          </Wrapper>
          </section>
           
        
       
    
  )
}
