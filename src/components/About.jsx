import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { FileArrowDown } from '@phosphor-icons/react';

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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre mim</h2>
      </motion.div>

      <div className="xl:mt-12 xl:flex-row flex flex-col-reverse mt-4 items-start gap-10 overflow-hidden">
        <motion.div>

          <motion.p variants={fadeIn("", "", 0.1, 1)} className=" text-secondary text-[17px] max-w-3xl leading-[30px]">
            Atualmente atuo como Desenvolvedor Front-End para uma empresa de tecnologia em minha cidade, sou responsável pela criação de websites e sistemas, trabalho com desenvolvimento de interfaces com a biblioteca React/Next.js, construção de aplicativos com React Native, consumo de dados via API para integrar aplicações e possuo contato direto com clientes em reviews por adotarmos a metodologia Scrum.
            Também possuo conhecimentos em HTML, CSS, SASS, Styled Components, Bootstrap, Tailwind, Vite.js, Express, Laravel, MySQL, Firebase, Git e GitHub.
            <br />
            <br />
            Durante a universidade, participei de diversas maratonas de programação e nelas me identifiquei, conheci a grandeza dessa área quando pude participar do evento Bluehack 2018 e IBM Cloud Discovery, voltado ao desenvolvimento de soluções tecnológicas para os desafios ONU/ASBRAD, Fleury e Copersucar.
            <br />
            <br />
            Concluí minha graduação de Engenheiro da Computação em 2021 pelo Centro Universitário Salesiano de São Paulo, período fundamental para minha carreira por proporcionar diversas experiências marcantes em eventos sociais.
          </motion.p>

          <a href="../src/constants/cvIcaroApolo.pdf" target="_blank" className="mt-4 flex items-center gap-2 green-pink-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer hover:opacity-90">
            <FileArrowDown size={24} color="#fff" weight="duotone" />
            Download CV
          </a>
        </motion.div>

        <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto h-[350px]">
          <img src="https://avatars.githubusercontent.com/u/42072562?v=4" alt="Personal Photo" className="max-w-xs rounded-full p-1 shadow-md shadow-[#2f80ed] green-pink-gradient" />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")