import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant, slideVertical } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
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
    <>
      <motion.div variants={textVariant()} className="flex flex-col lg:items-start items-center">
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre mim</h2>
      </motion.div>

      <div className="xl:mt-12 xl:flex-row flex flex-col-reverse mt-4 lg:items-start items-center gap-10 overflow-hidden">
        <motion.div>
          <h1 className={`${styles.heroHeadText} text-white`}>Prazer, sou <span className="green-pink-text-gradient" ref={el}></span></h1>

          <motion.p variants={textVariant()} className=" text-secondary text-[17px] max-w-3xl leading-[30px]">
            <span className="sm:hidden">
              Meu nome é <b>Ícaro Apolo,</b> sou <b>Engenheiro de Software</b> e atualmente trabalho com <b>desenvolvimento Web.  </b>
              Crio <b>soluções digitais personalizáveis</b> para atender <b>necessidades de clientes,</b> sejam elas, <b>sistemas complexos, interfaces de usuários</b> e <b>sites</b> no geral.
              <br />
              <br />
              Atualmente atuo como <b>desenvolvedor Front-End</b>, sou responsável pela <b>criação de websites e sistemas</b>, trabalho com <b>desenvolvimento de interfaces</b> com a biblioteca <b>React/Next.js</b>, construção de <b>aplicativos com React Native</b>, consumo de dados via API para <b>integrar aplicações</b> e possuo contato direto com clientes em reviews por adotarmos a <b>metodologia Scrum.</b>
            </span>
            <span className="flex items-center gap-2 w-full flex-wrap mt-1 lg:justify-start justify-center"><Icon icon="logos:html-5" width="32" height="32" /><Icon icon="logos:css-3" width="32" height="32" /><Icon icon="logos:javascript" width="32" height="32" /><Icon icon="devicon:typescript" width="32" height="32" /><Icon icon="logos:react" width="32" height="32" /><Icon icon="logos:nextjs-icon" width="32" height="32" /><Icon icon="logos:vitejs" width="32" height="32" /><Icon icon="logos:tailwindcss-icon" width="32" height="32" /><Icon icon="skill-icons:styledcomponents" width="32" height="32" /><Icon icon="logos:sass" width="32" height="32" /><Icon icon="logos:bootstrap" width="32" height="32" /><Icon icon="logos:laravel" width="32" height="32" /><Icon icon="devicon:nodejs" width="32" height="32" /><Icon icon="logos:mysql" width="32" height="32" /><Icon icon="logos:firebase" width="32" height="32" /><Icon icon="logos:git-icon" width="32" height="32" /><Icon icon="logos:github-icon" width="32" height="32" /></span>
            {/* <br /> */}
            <br />
            Durante a universidade, participei de diversas <b>maratonas de programação</b> e nelas me identifiquei, conheci a grandeza dessa área quando pude participar do evento <b>Bluehack 2018 e IBM Cloud Discovery</b>, voltado ao desenvolvimento de soluções tecnológicas para os <b>desafios ONU/ASBRAD, Fleury e Copersucar.</b>
            <br />
            <br />
            Concluí minha graduação de <b>Engenheiro da Computação</b> em 2021 pelo <b>Centro Universitário Salesiano de São Paulo,</b> período fundamental para minha carreira por proporcionar diversas experiências marcantes em <b>eventos sociais.</b> Desde então, atuo na área de desenvolvimento de sistemas e busco me aprimorar cada vez mais.
          </motion.p>

          <div className="flex lg:justify-start justify-center mt-4">
            <a href="/icaroApoloFrontEndCV.pdf" target="_blank" className="mt-4 flex items-center gap-2 green-pink-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer hover:opacity-90">
              <Icon icon="material-symbols:sim-card-download-outline" width="32" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto h-[320px]"> */}
        <motion.div variants={slideVertical} initial="hidden" whileInView="show" className="xl:flex-1 xl:h-auto h-[320px]">
          <img src="https://avatars.githubusercontent.com/u/42072562?v=4" alt="Personal Photo" className="max-w-xs rounded-full p-1 shadow-md shadow-[#2f80ed] green-pink-gradient" />
        </motion.div>
      </div >

      <div className="mt-20 flex flex-wrap gap-10 justify-center lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")