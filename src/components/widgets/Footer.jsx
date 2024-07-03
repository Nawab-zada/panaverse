import Image from 'next/image';
import panaversedao from "/public/panaverse-logo.webp"
import Wrapper from '../shared/Wrapper';
import { SiFacebook,  } from "react-icons/si";

import { IoLogoYoutube } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";


import { FaTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <Wrapper>
  <div className=' flex mt-0 sm:  '>
        
    <div className='flex-1 '>
      <Image src={panaversedao} alt='panavarse' width={120} height={120 }/>
      <p className='text-xs'>
      Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
     

    
      </p>
      <div className='flex text-teal-800 gap-4 mt-3 rounded-full'>
      <SiFacebook/>
      <IoLogoYoutube />
      <IoLogoYoutube />
      <FaGithubSquare />
      <FaTwitter />
      </div>
    </div>
<div className='flex-1 px-5'>
  <h3 className='font-bold'>
    program
  </h3>
  <div className='text-xs space-y-2 mt-2'>
<p>Web 3.0 and Metaverse Developer</p>
<p>Artificial Intelligence</p>
<p>Cloud-Native Computing</p>
<p>Ambient Computing and IoT</p>
<p>Genomics and Bioinformatic</p>
<p>Network Programmability and Automation</p>
<p></p>
<p></p>
<p></p>

</div>

</div>
<div>
  <h3 className='font-bold'>
    page
  </h3>
  <div className='text-xs mt-2 space-y-2 flex-1'>
    <p>Home</p>
    <p>Quarter1</p>
    <p>Quarter2</p>
    <p>Quarter3</p>
    <p>Quarter4</p>
   
  </div>
</div>


     
</div>
  </Wrapper>
  );
};

export default Footer;
