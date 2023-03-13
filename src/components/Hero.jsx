import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typed from 'typed.js'

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Apolo", "Web Developer", "Front-End"],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    })
    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full blue-gradient" />
          <div className="w-1 h-40 sm:h-80 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, i'm <span className="blue-text-gradient" ref={el}></span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop websites, <br className="sm:block hidden" />user interfaces and web applications.</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero