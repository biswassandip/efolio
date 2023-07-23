import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { GiDiscussion } from 'react-icons/gi'
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa'

import ARTEFACT1 from '../../artefacts/AI-Applications.pdf'
import ARTEFACT2 from '../../artefacts/AI-Solution.pdf'


import './nlp.css'

const NLP = () => {
  return (
    <div id="nlp">
      <div className='separator'>
        <span className="text">
          <FaAmericanSignLanguageInterpreting/> Module: Knowledge Representation & Reasoning
        </span>
      </div>
      
      <section id='nlp' className='nlp'>
        <center>
          <h5>(Module started on January 2023)</h5>
        </center>
        <br/>
        <div className="container nlp__container">

          <p>
            The Knowledge representation and reasoning (KRR) module within Artificial Intelligence (AI) was the most challenging and exciting of the modules as it dealt with understanding how and why of the representation of knowledge so that machines can use it to solve problems. The objective of KRR is to build a model that is coupled with accuracy and efficiency.
          </p>
            <p>            
            This module starts by providing hands-on explanations that has been used for generating classifications and trained modules that can be run and re-run to build automated classifiers. These can then be evaluated and deployed.
            The methodology used was <i>CRISP-DM</i> and here we reviewed it by applying the datafiles to the <i>WEKA</i> tool.
            <br />
            <br />            
            Found better understanding by implementing the processes, steps and methods with an assignment using a banking dataset that built the foundation for <i>Python, WEKA, Linux</i> and reviewing tools like <i>WEKA, IBM SPSS Modeler</i> for CRISP-DM and Azure ML Studio.
          </p>
            <p>
            The module was better understood with discussion forums and feedbacks. I strated on by adding to the forum about the <i>"Rapid evolution in AI – requires processed data for Assistive Technologies (AT)".</i>
            <br />
            <br />
            Concluded the module with discussing about the various Learnings used to build AI modules. It's application and proposed solution. Added the topic about <i>"Software Engineering with supervised, unsupervised and semi-supervised learnings"</i> within the discussion forums.
          </p>
                      
          <div className="nlp__LO">
            <h3>Learning Outcomes</h3>
            <div className="nlp__content">

              <article className='nlp__details'>
                <IoMdArrowRoundForward className='nlp__details-icon'/>
                <div>
                  <h4>Evolution of AI, Future and Features</h4>
                </div>
              </article>
            
              <article className='nlp__details'>
                <IoMdArrowRoundForward className='nlp__details-icon'/>
                <div>
                  <h4>Applications of AI, it's capabilities and uses</h4>
                </div>
              </article>

              <article className='nlp__details'>
                <IoMdArrowRoundForward className='nlp__details-icon'/>
                <div>
                  <h4>Governance, Ethics and Issues around AI </h4>
                </div>
              </article>
            </div>
          </div>

          <div className="nlp__CO">
            <h3>Discussions</h3>
            <div className="nlp__content">

              <article className='nlp__details'>
                <GiDiscussion className='nlp__details-icon'/>
                <div>
                  <h4>Transformation of Society due to AI</h4>
                </div>
              </article>
            
              <article className='nlp__details'>
                <GiDiscussion className='nlp__details-icon'/>
                <div>
                  <h4>Economic upliftmentss due to AI</h4>
                </div>
              </article>

              <article className='nlp__details'>
                <GiDiscussion className='nlp__details-icon'/>
                <div>
                  <h4>Principles, Methods and Concepts of AI</h4>
                </div>
              </article>

            </div>          
          </div>

          <div className="nlp__AR">
          <h3>Assignments</h3>
            <div className="nlp__content">

              <article className='nlp__details'>
                <BsFileEarmarkPdfFill className='nlp__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>Evaluation of AI Solution</a>
                  </h4>
                </div>
              </article>
            
              <article className='umodule__details'>
                <BsFileEarmarkPdfFill className='nlp__details-icon'/>
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

export default NLP