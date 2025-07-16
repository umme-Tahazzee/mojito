
import Image from "next/image";


const Hero = () => {
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
           </div>
         </div>
      </section>
    </>
  );
};

export default Hero;
