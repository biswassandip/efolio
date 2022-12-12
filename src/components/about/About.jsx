import React from 'react'
// import { BsAward } from 'react-icons/bs'
// import { FiUsers } from 'react-icons/fi'
// import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

import './about.css'

import ME from '../../assets/aboutme.png'

const About = () => {
  return (
    <div id="about">
      <br/>
      <div className='separator'>
        <span className="text">
          About Me
        </span>
      </div>

      <section id='about' className='about'>


          <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about me" className='me__image'/>
            </div>  
          </div>

          <div className="about__content">
            {/* <div className="about__cards">

              <article className='about__card'>
                <BsAward className='about__icon'/>
                <h5>Experience</h5>
                <small>+20 years</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>+300 worldwide</small>
              </article>

              <article className='about__card'>
                <AiOutlineFundProjectionScreen className='about__icon'/>
                <h5>Projects</h5>
                <small>+80 completed</small>
              </article>

            </div> */}

            <p>
              An ethusiast to solve problems and find answers. A great cook, gardener and a dog lover.
              A Programmer by heart and an Architect by profession.
              Lead solutions for Telecom, Betting (Sports) and Commerce companies.
              Pursuing M. Sc. in Artificial Intelligence (AI), from Univeristy of Essex to set myself in a deep-diving drive for the subject and collaborating knowledge with fellow students, teachers and experts.
            </p>
            <p>            
              The e-Portfolio provides information about all works being covered as part of the M. Sc. AI programme and it's projects, artefacts, discussions, notes and projects.
            </p>
          </div>
        </div>
      
        </section>
      </div>
  )
}

export default About