import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { GiDiscussion } from 'react-icons/gi'
import { MdWbIncandescent } from 'react-icons/md'

import ARTEFACT1 from '../../artefacts/AI-Applications.pdf'
import ARTEFACT2 from '../../artefacts/AI-Solution.pdf'


import './umodule.css'

const UnderstandingAI = () => {
  return (
    <div id="umodule">
      
      <section id='umodule' className='umodule'>

        <div className='separator'>
          <span className="umodule__header">
            <MdWbIncandescent/> Module: Understanding AI
          </span>
          <h5 className='umodule__subheader'>(Module started on March 2022)</h5>
        </div>


        <br />
        
        <div className="container umodule__container">
            <p>
            "Artificial Intelligence (AI)" refers to the simulation of human intelligence processes by machines, particularly computer systems. In the field of computer science, AI has undergone a significant transformation. This module delves into the evolving landscape of AI and its profound impact on various disciplines.
            <br />
            <br />            
            Integrating Artificial Intelligence (AI) and Machine Learning (ML) has become integral to modern technology. AI entails emulating cognitive functions, while ML involves using algorithms to enable systems to learn from data and improve their performance over time. Though distinct, these two domains have synergised to yield many applications across diverse sectors. Notably, this encompasses the development of machines capable of human-like computation, reasoning, and applications adept at extracting, analysing, and interpreting data patterns to derive actionable insights.
            </p>
            <p>            
            A fundamental component of this module is hands-on exploration, which encompasses the creation of classifications and training modules. These modules can be executed iteratively to establish automated classifiers. The Comprehensive, Reflective, Integrative, Strategic, and Detailed (CRISP-DM) methodology serves as the guiding framework, and its efficacy is evaluated through its application to data sets using the WEKA tool, a widely used data mining software.
            <br />
            <br />            
            The practical aspect of the module is fortified by an assignment involving a banking dataset. This assignment serves as a bedrock for instruction in Python programming, WEKA utilisation, Linux proficiency, and an examination of tools like WEKA, IBM SPSS Modeler, and Azure ML Studio within the CRISP-DM context.
            </p>
            <p>
            Augmenting the learning experience are vibrant discussion forums and valuable feedback mechanisms. Active participation in these forums is exemplified by contributions such as the discourse on "Rapid Evolution in AI - Necessitating Processed Data for Assistive Technologies (AT)."
            <br />
            <br />
            In conclusion, the module encapsulates an extensive exploration of diverse learning modalities employed in constructing AI modules. It probes their practical applications and proposes potential solutions. Integrating "Software Engineering with Supervised, Unsupervised, and Semi-Supervised Learnings" is noteworthy among the topics that engender substantive discussions within the forum environment.
          </p>
                      
          <div className="umodule__LO">
            <h3>Learning Outcomes</h3>
            <div className="umodule__content">

              <article className='umodule__details'>
                <IoMdArrowRoundForward className='umodule__details-icon'/>
                <div>
                  <h4>Evolution of AI, Future and Features</h4>
                </div>
              </article>
            
              <article className='umodule__details'>
                <IoMdArrowRoundForward className='umodule__details-icon'/>
                <div>
                  <h4>Applications of AI, it's capabilities and uses</h4>
                </div>
              </article>

              <article className='umodule__details'>
                <IoMdArrowRoundForward className='umodule__details-icon'/>
                <div>
                  <h4>Governance, Ethics and Issues around AI </h4>
                </div>
              </article>
            </div>
          </div>

          <div className="umodule__CO">
            <h3>Discussions</h3>
            <div className="umodule__content">

              <article className='umodule__details'>
                <GiDiscussion className='umodule__details-icon'/>
                <div>
                  <h4>Transformation of Society due to AI</h4>
                </div>
              </article>
            
              <article className='umodule__details'>
                <GiDiscussion className='umodule__details-icon'/>
                <div>
                  <h4>Economic upliftmentss due to AI</h4>
                </div>
              </article>

              <article className='umodule__details'>
                <GiDiscussion className='umodule__details-icon'/>
                <div>
                  <h4>Principles, Methods and Concepts of AI</h4>
                </div>
              </article>

            </div>          
          </div>

          <div className="umodule__AR">
          <h3>Assignments</h3>
            <div className="umodule__content">

              <article className='umodule__details'>
                <BsFileEarmarkPdfFill className='umodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>Evaluation of AI Solution</a>
                  </h4>
                </div>
              </article>
            
              <article className='umodule__details'>
                <BsFileEarmarkPdfFill className='umodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} target='_blank' rel='noopener noreferrer'>Implementation of the AI Solution</a>
                  </h4>
                </div>
              </article>

              
            </div>          
          </div>        

          
        </div>

      </section>
    </div>
  )
}

export default UnderstandingAI