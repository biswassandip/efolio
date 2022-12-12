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
      <div className='separator'>
        <span className="text">
          <MdWbIncandescent/> Module: Understanding AI
        </span>
      </div>
      
      <section id='umodule' className='umodule'>
        <center>
          <h5>(Module started on March 2022)</h5>
        </center>
        <br/>
        <div className="container umodule__container">
            <p>
            “Artificial Intelligence (AI)”, what is artificial about it in computer science?. This module begins with explaining about how AI has changed the thinking in various fields.
            <br />
            <br />            
            We have been using the benefits of AI along with its analytics and intelligence provider, Machine Learning (ML). Artificial Intelligence (AI) and Machine Learning (ML) have differences. Still, they together have given humanity applications in every area, like machines that can compute and think as humans do or applications that can mine, extract and discover data patterns turning them into useful information.
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
                      <a href={ARTEFACT1} download>Evaluation of AI Solution</a>
                  </h4>
                </div>
              </article>
            
              <article className='umodule__details'>
                <BsFileEarmarkPdfFill className='umodule__details-icon'/>
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
      </div>
  )
}

export default UnderstandingAI