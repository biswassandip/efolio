import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { GiDiscussion } from 'react-icons/gi'
import { SiProbot } from 'react-icons/si'

import ARTEFACT1 from '../../artefacts/IA-Digital-Forensics-Prototype.pdf'
import ARTEFACT2 from '../../artefacts/IA-Digital-Forensics-Execution.pdf'


import './ia.css'

const IA = () => {
  return (
    <div id="ia">
      <div className='separator'>
        <span className="text">
          <SiProbot/> Module: Intelligent Agents
        </span>
      </div>
      
      <section id='ia' className='ia'>
        <center>
          <h5>(Module started on May 2023)</h5>
        </center>
        <br/>
        <div className="container ia__container">

          <p>
            TBC
          </p>
            <p>            
            TBC
            <br />
            <br />            
            TBC
          </p>
            <p>
            TBC
            <br />
            <br />
            TBC
          </p>
                      
          <div className="ia__LO">
            <h3>Learning Outcomes</h3>
            <div className="ia__content">

              <article className='ia__details'>
                <IoMdArrowRoundForward className='ia__details-icon'/>
                <div>
                  <h4>...</h4>
                </div>
              </article>
            
              <article className='ia__details'>
                <IoMdArrowRoundForward className='ia__details-icon'/>
                <div>
                  <h4>...</h4>
                </div>
              </article>

              <article className='ia__details'>
                <IoMdArrowRoundForward className='ia__details-icon'/>
                <div>
                  <h4>... </h4>
                </div>
              </article>
            </div>
          </div>

          <div className="ia__CO">
            <h3>Discussions</h3>
            <div className="ia__content">

              <article className='ia__details'>
                <GiDiscussion className='ia__details-icon'/>
                <div>
                  <h4>....</h4>
                </div>
              </article>
            
              <article className='ia__details'>
                <GiDiscussion className='ia__details-icon'/>
                <div>
                  <h4>...</h4>
                </div>
              </article>

              <article className='ia__details'>
                <GiDiscussion className='ia__details-icon'/>
                <div>
                  <h4>Principles, Methods and Concepts of AI</h4>
                </div>
              </article>

            </div>          
          </div>

          <div className="ia__AR">
          <h3>Assignments</h3>
            <div className="ia__content">

              <article className='ia__details'>
                <BsFileEarmarkPdfFill className='ia__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>An IA Prototype Design</a>
                  </h4>
                </div>
              </article>
            
              <article className='ia__details'>
                <BsFileEarmarkPdfFill className='ia__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} target='_blank' rel='noopener noreferrer'>Execution and Development of the prototype</a>
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

export default IA