import Image from "next/image";
import Hero from '@/components/widgets/Hero'
import CoreTrack from "@/components/widgets/CoreTrack";
import { Specializedtrack } from "@/components/Specilized/Specializedtrack";
import { Outcome } from "@/components/Specilized/Outcome";
import Footer from "@/components/widgets/Footer"


export default function Home() {
  return (
   <div >
<Hero/>
<CoreTrack/>
<Specializedtrack/>
<Outcome/>
<Footer/>


   </div>
  );
}
