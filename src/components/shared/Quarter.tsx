import React, { FC } from 'react'
interface Iprops{
    header:string,
    descripation:string,
    number:number
    haveboreder?:boolean
}

export const Quarter:FC<Iprops> = ({header,descripation,number,haveboreder=true}) => {
  return (
    <div className={`flex mt-5 gap-3 flex-col md:flex-row  px-13 py-30  gap-y-5 ${haveboreder && "border"}` }>
        <div className='border rounded-xl relative  items-center     '>
   <h4 className='font-bold text-lg'>
           {header}
    </h4>
      <p className='mt-2 text-slate-600 '>
        {descripation}
      </p>
      <span className='absolute  right-0 text-9xl font-bold -z-10 text-gray-200 '>{}</span>
       </div > 
       </div>
  )
}
