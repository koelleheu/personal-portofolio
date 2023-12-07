import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-15 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return <>
    <motion.div variants={textVariant()}>
      <p className={styles.heroSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Once amidst gears and mechanics, now navigating the digital frontier.
      A Mechanical Engineer turned Full Stack Web Developer, sculpting solutions with a blend of engineering precision and coding finesse.
      Embracing a transformative odyssey, I've transcended disciplines, mastering the language of software through dedication and a rigorous bootcamp. <br />
      Explore my portfolio—a testament to a hero's evolution.
      Witness the fusion of analytical prowess and creative ingenuity, forging solutions that transcend boundaries.
      Join me in this saga, where engineering meets innovation, and every line of code narrates the story of a hero's journey into the world of digital possibilities.
    </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
}

export default SectionWrapper(About, "about")