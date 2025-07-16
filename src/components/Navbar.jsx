'use client'

import Link from 'next/link'
import React from 'react'
import { navLinks } from '../../constants'
import Image  from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const Navbar = () => {
   useGSAP(()=>{
       const navTween = gsap.timeline({
          ScrollTrigger:{
            trigger : 'nav',
            start : 'bottom top'
          }
       });
       navTween.fromTo('nav', {
           backgroundColor : 'transparent'}, {
             backgroundColor : '#00000050',
             backgroundFilter : 'blur(10px)',
             duration : 1,
             ease : 'power1.inOut'
           
       })
   })


  return (
    <nav>
     <div>   
      <Link href='#home' 
      className='flex items-center gap-2'>
          <Image 
           src='/images/logo.png' 
           alt="logo"
           width={32}
           height={32}
          />
           <p>Valvet Pour</p>
      </Link>

      <ul>
       {navLinks.map((link)=>(
           <li key={link.id}>
             <Link href={`#${link.id}`} >
               {link.title}
             </Link>
           </li>
       ))}
      </ul>
       </div>
    </nav>
  )
}

export default Navbar