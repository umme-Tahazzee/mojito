'use client'
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Link from "next/link";


const Hero = () => {
    useGSAP(()=>{
      const heroSplit = new SplitText('.title', { type: 'chars, words' });
      const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
      heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))
      gsap.from(heroSplit.chars,{
         yPercent : 100,
         duration : 1.8,
         ease : 'expo.out',
         stagger : 0.05
      })
      gsap.from(paragraphSplit.lines,{
         opacity:0,
         yPercent:100,
         duration:1.8,
         ease:'expo.out',
         stagger: 0.06,
         delay:1,
      })

    },[])

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img src="/images/hero-left-leaf.png"
         alt="hero"      
         className="left-leaf" />
          <img src="/images/hero-right-leaf.png"
         alt="hero"      
         className="right-leaf" />


         <div className="body">
           <div className="content">
                <div className="space-y-5 hidden 
                md:block ">
                  <p>Cool. Crisp. Classic.</p>
                  <p className="subtitle">
                   Sip the Spirit <br/> of Summer
                  </p>
                </div> 
                <div className="view-cocktails">
                 <p className="subtitle">
                  Every cocktail on our menu is a blend of 
                  premium ingredients, creative flair, and timeless
                  recipes — designed to delight your senses. 
                 </p>
                 <Link href='#cocktails'>View Cocktails</Link>
                </div>
           </div>
         </div>
      </section>
    </>
  );
};

export default Hero;
