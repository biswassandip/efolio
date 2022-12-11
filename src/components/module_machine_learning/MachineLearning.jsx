import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { GiDiscussion } from 'react-icons/gi'

import ARTEFACT1 from '../../artefacts/AI-Applications.pdf'
import ARTEFACT2 from '../../artefacts/AI-Solution.pdf'


import './mlmodule.css'

const MachineLearning = () => {
  return (
    <section id='mlmodule'>
      <h5>How and Why AI</h5>
      <h2>Module: Machine Learning</h2>

      
        <div className="container mlmodule__container">
          
          <div className="mlmodule__LO">
            <h3>Learning Outcomes</h3>
            <div className="mlmodule__content">

              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Evolution of AI, Future and Features</h4>
                </div>
              </article>
            
              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Applications of AI, it's capabilities and uses</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Governance, Ethics and Issues around AI </h4>
                </div>
              </article>
            </div>
          </div>

          <div className="mlmodule__CO">
            <h3>Teamwork</h3>
            <div className="mlmodule__content">

              <article className='mlmodule__details'>
                <GiDiscussion className='mlmodule__details-icon'/>
                <div>
                  <h4>Transformation of Society due to AI</h4>
                </div>
              </article>
            
              <article className='mlmodule__details'>
                <GiDiscussion className='mlmodule__details-icon'/>
                <div>
                  <h4>Economic upliftmentss due to AI</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <GiDiscussion className='mlmodule__details-icon'/>
                <div>
                  <h4>Principles, Methods and Concepts of AI</h4>
                </div>
              </article>

            </div>          
          </div>

          <div className="mlmodule__AR">
            <h3>Artefacts</h3>
            <div className="mlmodule__content">

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT1} download>Evaluation of AI Solution</a>
                  </h4>
                </div>
              </article>
            
              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} download>Implementation of the AI Solution</a>
                  </h4>
                </div>
              </article>

              
            </div>          
          </div>        

          
        </div>

    </section>
  )
}

export default MachineLearning