import React, { FC } from 'react'

export const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
    
  return (
    <div className='max-w-screen-5xl px-8 min-width:100px  '>
        {children}
    </div>
  )
}
export default Wrapper