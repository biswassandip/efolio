import React from 'react'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import './about.css'

import ME from '../../assets/self.png'

const About = (props) => {
  return (
    <div id="about"> 
      

      <section id='about' className='about' ref={props.refName}>

      <div className='separator'>
        <span className="about__header">
          <AiOutlineUser /> About Me
        </span>
      </div> 

          <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about me" className='me__image'/>
            </div>  
          </div>

          <div className="about__content">
            <p>
              Over the past 23 years, I have led solutions architecture, product rollouts, and technology development projects in various industries, including gaming, retail, e-commerce, telecom, and business intelligence. I have a proven track record of guiding organisations through technological transformations and helping them achieve their strategic goals.
            </p>
            <p>            
              In addition to my professional interests, I enjoy cooking, gardening, and spending time with my dog. I am also a skilled programmer and architect. I am excited to pursue a Master of Science in Artificial Intelligence (AI) at the University of Essex. I am eager to learn more about AI and how it can be used to solve real-world problems.
            </p>
            <p>
              My skills and experience make me a strong candidate for the M. Sc. AI program. I am also a dedicated and collaborative learner. I am excited to contribute to the program and to learn from my peers and instructors.
              <br />
              <br/>
              I have attached my e-portfolio, which contains a comprehensive chronicle of my undertakings as part of the M. Sc. AI program. It includes projects, artefacts, discussions, and scholarly notes. My e-portfolio demonstrates my commitment to pushing the boundaries of knowledge and innovation.
            </p>

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

            </div>             */}
          </div>
        </div>
      
        </section>
      </div>
  )
}

export default About