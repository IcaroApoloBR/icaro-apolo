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
    <Tilt className="xs:w-52 w-full">
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
      strings: ["Ícaro Apolo", "Desenvolvedor Web / Mobile", "Front-End", "Engenheiro de Software"],
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

      <div className="xl:flex-row flex flex-col-reverse mt-4 lg:items-start items-center gap-10 overflow-hidden">
        <motion.div>
          <h1 className={`${styles.heroHeadText} text-white`}>Prazer, sou <span className="green-pink-text-gradient" ref={el}></span></h1>

          <motion.div variants={slideVertical} initial="hidden" whileInView="show" className=" text-secondary text-[17px] max-w-3xl leading-[30px]">
            Apaixonado por <b>desenvolvimento web/mobile</b> e criação de soluções digitais personalizáveis. Minha carreira é centrada na entrega de <b>sistemas complexos</b>, interfaces de usuário envolventes, websites de alto desempenho e aplicativos funcionais, sempre com o objetivo de atender às necessidades dos clientes.
            <br />
            <br />
            Liderança em projetos de desenvolvimento de websites e sistemas. Minha expertise reside na construção de <b>interfaces excepcionais</b>, utilizando tecnologias de ponta como <b>React e Next.js</b>. Além disso, estou envolvido na criação de aplicativos móveis com <b>React-Native</b> e faço a integração de dados via APIs para oferecer soluções completas.
            <br />
            <br />
            <span className="flex items-center gap-2 w-full flex-wrap mt-2 justify-center"><Icon icon="logos:html-5" width="32" height="32" /><Icon icon="logos:css-3" width="32" height="32" /><Icon icon="logos:javascript" width="32" height="32" /><Icon icon="devicon:typescript" width="32" height="32" /><Icon icon="logos:react" width="32" height="32" /><Icon icon="logos:nextjs-icon" width="32" height="32" /><Icon icon="logos:zod" width="32" height="32" /><Icon icon="logos:jest" width="32" height="32" /><Icon icon="devicon:redux" width="32" height="32" /><Icon icon="logos:vitejs" width="32" height="32" /><Icon icon="logos:tailwindcss-icon" width="32" height="32" /><Icon icon="skill-icons:styledcomponents" width="32" height="32" /><Icon icon="logos:sass" width="32" height="32" /><Icon icon="logos:bootstrap" width="32" height="32" /><Icon icon="logos:aws" width="32" height="32" /><Icon icon="logos:laravel" width="32" height="32" /><Icon icon="devicon:nodejs" width="32" height="32" /><Icon icon="logos:mysql" width="32" height="32" /><Icon icon="logos:firebase" width="32" height="32" /><Icon icon="logos:git-icon" width="32" height="32" /><Icon icon="logos:github-icon" width="32" height="32" /><Icon icon="logos:insomnia" width="32" height="32" /><Icon icon="devicon:postman" width="32" height="32" /></span>
            <br />
            O meu envolvimento direto com os clientes e a adoção da metodologia <b>Scrum e Kanban</b> garantem que os projetos sejam entregues com eficiência e alinhados às expectativas.
            Tenho um profundo interesse em práticas de desenvolvimento modernas, incluindo a implementação de <b>Clean Code, Clean Architecture, SOLID</b> e a execução de <b>testes</b> abrangentes para garantir a <b>qualidade e manutenção do código</b>.
            <br />
            <br />
            Durante a universidade, participei de diversas <b>maratonas de programação</b> e nelas me identifiquei, conheci a grandeza dessa área quando pude participar do evento <b>Bluehack 2018 e IBM Cloud Discovery</b>, voltado ao desenvolvimento de soluções tecnológicas para os <b>desafios ONU/ASBRAD, Fleury e Copersucar.</b>
          </motion.div>

          <div className="flex lg:justify-start justify-center mt-4">
            <a href="/icaroApoloFrontEndCV.pdf" target="_blank" className="mt-4 flex items-center gap-2 green-pink-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer hover:opacity-90">
              <Icon icon="material-symbols:sim-card-download-outline" width="32" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto h-[320px]"> */}
        <motion.div variants={slideVertical} initial="hidden" whileInView="show" className="xl:flex-1 xl:h-auto h-72">
          <img src="https://avatars.githubusercontent.com/u/42072562?v=4" alt="Personal Photo" className="max-w-xs rounded-full p-1 shadow-md shadow-[#2f80ed] green-pink-gradient" />
        </motion.div>
      </div >

      <div className="mt-20 flex flex-wrap gap-7 justify-center lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")