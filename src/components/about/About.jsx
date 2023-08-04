import React from 'react'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import './about.css'

import ME from '../../assets/self.png'

const About = () => {
  return (
    <div id="about"> 
      

      <section id='about' className='about'>

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
              With a rich history spanning over 23 years, my professional journey has been characterized by my steadfast
              leadership in Solutions Architecture, Product Rollouts, and Technology Development across diverse sectors
              such as Gaming, Retail, e-Commerce, Telecom, and Business Intelligence. Guiding and steering the technological
              trajectory of organizations has been my forte, aligning their vision with strategic imperatives to pave the way
              for future growth.
            </p>
            <p>            
              My unwavering passion for problem-solving has fueled my drive to seek solutions and unearth insights.
              Beyond my technological pursuits, I enjoy as a skilled cook, avid gardener, and devoted dog enthusiast.
              My heart beats with the rhythm of a programmer, while my mind thrives in the realm of architectural innovation.
              Noteworthy achievements include spearheading groundbreaking solutions for esteemed entities in the Telecom, Betting (Sports),
              and Commerce domains.
            </p>
            <p>
              Currently, I am immersed in a journey of intellectual enrichment as I pursue a Master of Science in Artificial Intelligence
              (AI) at the prestigious University of Essex. This pursuit is driven by my unwavering dedication to delve deep into the nuances
              of AI, fostering collaborative knowledge exchange with peers, educators, and industry experts.
              <br />
              <br/>
              Contained within this e-Portfolio is a comprehensive chronicle of my undertakings as part of the M. Sc. AI program, 
              encapsulating a diverse array of projects, artifacts, illuminating discussions, and scholarly notes. It stands as a 
              testament to my unrelenting commitment to pushing the boundaries of knowledge and innovation.              
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