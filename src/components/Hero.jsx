import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typed from 'typed.js'

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Ícaro Apolo", "Desenvolvedor Web", "Front-End"],
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
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Prazer, sou <span className="green-pink-text-gradient" ref={el}></span></h1>
          <p className={`${styles.heroSubText} mt-2 mb-10 text-secondary`}>Meu nome é <b>Ícaro Apolo,</b> sou <b>Engenheiro de Software</b> e atualmente trabalho com <b>desenvolvimento Web.</b> <br className="sm:block hidden" />Crio <b>soluções digitais personalizáveis</b> para atender <b>necessidades de clientes,</b> sejam elas, <b>sistemas complexos, interfaces de usuários</b> e <b>sites</b> no geral.</p>
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
    </section >
  )
}

export default Hero