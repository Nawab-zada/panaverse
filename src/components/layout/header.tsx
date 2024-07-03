import React from 'react'
import logo from '/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'
export const Header = () => {
  return (
    <Wrapper>
    <header className='flex  justify-between  py-6 px-4 items-center'>
       <div className=''>
       <Image src={logo} alt='panaverse.logo' width={120} />
        </div> 
      
       <ul className='flex gap-6 '>
        <li>
          <Link href={'/'}>
          Home
          </Link>
          </li>
        <li><Link href={'/courses'}>courses</Link> </li>
        </ul>
    </header>
    </Wrapper>
  )
}
