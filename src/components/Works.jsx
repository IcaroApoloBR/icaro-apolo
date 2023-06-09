import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { slideVertical } from '../utils/motion';
import { useState } from 'react';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

  return (
    <motion.div
      variants={slideVertical}
      initial="hidden"
      whileInView="show"
      className="mt-4"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [numberProjectsVisible, setNumberProjectsVisible] = useState(3);

  function handleSeeMoreProjects() {
    setNumberProjectsVisible(numberProjectsVisible + 3);
  }

  const showProjects = projects.slice(0, numberProjectsVisible);

  return (
    <>
      <motion.div
        variants={slideVertical}
        initial="hidden"
        whileInView="show"
        className="mb-12 flex flex-col lg:items-start items-center"
      >
        <p className={styles.sectionSubText}>Meu trabalho</p>
        <h2 className={styles.sectionHeadText}>Projetos</h2>
      </motion.div>

      <div className="w-full flex lg:justify-start justify-center">
        <motion.p
          variants={slideVertical}
          initial="hidden"
          whileInView="show"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Os projetos a seguir mostram minhas <b>habilidades e experiência</b> por meio de exemplos do <b>mundo real</b> do meu trabalho e de <b>eventos</b> que participei.
          Cada projeto é brevemente descrito com links para <b>repositórios de código</b> e alguns com <b>demonstrações ao vivo</b> através de deploy.
          Portanto, reflete minha <b>capacidade</b> de resolver <b>problemas complexos,</b> trabalhar com <b>diferentes tecnologias</b> e <b>gerenciar projetos</b> de forma eficaz.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 lg:justify-start justify-center">
        {showProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
        {numberProjectsVisible < projects.length && (
          <button onClick={handleSeeMoreProjects} className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl relative hover:opacity-80">Exibir Mais</button>
        )}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")