import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { SiProbot } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { GiArchiveResearch } from 'react-icons/gi'

// import ARTEFACT1 from '../../artefacts/IA-Digital-Forensics-Prototype.pdf'
// import ARTEFACT2 from '../../artefacts/IA-Digital-Forensics-Execution.pdf'



import './rm.css'

const RM = (props) => {
  return (
    <div id="rm">
      
      <section id='rm' className='rm' ref={props.refName}>
        <div className='separator'>
          <span className="rm__header">
            <GiArchiveResearch/> Module: Research Methods & Professional Practice
          </span>
          <h5 className='rm__subheader'>(Module started on August 2023)</h5>
        </div>
        <br/>
        <div className="container rm__container">

          <p>
            TBC
          </p>

          <p>
            TBC
          </p>

          <p>
            TBC
          </p>
                      
          <div className="rm__LO">
            <h3>Learning Outcomes</h3>
            <div className="rm__content">

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>TBC</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="rm__CO">
            <h3>Discussions</h3>
            <div className="rm__content">

              <article className='rm__details'>
                <AiFillGithub className='rm__details-icon'/>
                <div>
                  <h4>TBC</h4>
                </div>
              </article>
            

            </div>          
          </div>

          <div className="rm__AR">
          <h3>Assignments</h3>
            <div className="rm__content">

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      TBC
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

export default RM