import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { SiProbot } from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

import ARTEFACT1 from '../../artefacts/IA-Digital-Forensics-Prototype.pdf'
import ARTEFACT2 from '../../artefacts/IA-Digital-Forensics-Execution.pdf'



import './ia.css'

const IA = () => {
  return (
    <div id="ia">
      
      <section id='ia' className='ia'>
        <div className='separator'>
          <span className="ia__header">
            <SiProbot/> Module: Intelligent Agents
          </span>
          <h5 className='ia__subheader'>(Module started on May 2023)</h5>
        </div>
        <br/>
        <div className="container ia__container">

          <p>
          Within the growing landscape of modern computing there has been a growth in the intelligent-based technologies.
          These agents have been self governing that take part in important functions and features. One of the importatnt 
          trend that has been observed is by addressing the complexity and scale of problems that conventional computing
          approaches face difficulties.
          <br />
          <br />            
            First Order Logic (FOL) that is a formal logical system that is used for the KR&R in an agent's environment by
            providing a powerful expressive way to represent it.
          <br />
          <br />            
            In addition to FOL, KR&R and Natural Language Processing (NLP), this module also deep-dives to agent architectures,
            communications and types of agents - Symbolic Reasoning, Reactive and Hybrid.
          </p>

          <p>            
            The module as well understood by doing activities to create agent dialogues using Knowledge Query
            and Manipulation Language (KQML) and Knowledge Interchange Format (KIF). A simplistic code can be found <a href="https://github.com/biswassandip/efolio/tree/main/e-folio-tasks/intelligent-agents/unit6" target="_blank" rel="noopener noreferrer">Github: Here</a>
          <br />
          <br />            
            KQML and KIF are knowledge representation languages that have been used for communication between
            agents in distributed artificial intelligence systems. However, they have been superseded by more
            modern and efficient alternatives, such as HTTP and REST. KQML and KIF are still useful for some
            applications, but they are not as widely used as they once were.
          </p>

          <p>
            A task of creating constituency-based parse trees provided with understanding about various essential NLP tasks
            like syntactic analysis, grammar checking, information extraction, and machine translation.
          The task can be found <a href="https://github.com/biswassandip/efolio/tree/main/e-folio-tasks/intelligent-agents/unit8" target="_blank" rel="noopener noreferrer">Github: Here</a>
          <br />
          <br />
            The module was concluded by Deep Learning, Ehtics and Building an Intelligent Agent digital forensics application.
            To elaborate more about Deep Learning and Ethics and as part of a task and quick view has been put <a href="https://github.com/biswassandip/efolio/tree/main/e-folio-tasks/intelligent-agents/unit10" target="_blank" rel="noopener noreferrer">Github: Here</a>
            <br />
            <br />
            A Team Project to provide with a design, prototype, development and execution was produced to prove how intelligent agent interacts and what further can be done.
            The entire work can be found under "Team Projects" section below.
          </p>
                      
          <div className="ia__LO">
            <h3>Learning Outcomes</h3>
            <div className="ia__content">

              <article className='ia__details'>
                <IoMdArrowRoundForward className='ia__details-icon'/>
                <div>
                  <h4>Why Intelligent Agents?</h4>
                </div>
              </article>
            
              <article className='ia__details'>
                <IoMdArrowRoundForward className='ia__details-icon'/>
                <div>
                  <h4>Architecture, Building Blocks and NLP</h4>
                </div>
              </article>

              <article className='ia__details'>
                <IoMdArrowRoundForward className='ia__details-icon'/>
                <div>
                  <h4>Deep Learning, Ethics and Working togther</h4>
                </div>
              </article>

              <article className='ia__details'>
                <IoMdArrowRoundForward className='ia__details-icon'/>
                <div>
                  <h4>Communications and Building an Agent</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="ia__CO">
            <h3>Tasks</h3>
            <div className="ia__content">

              <article className='ia__details'>
                <AiFillGithub className='ia__details-icon'/>
                <div>
                  <h4><a href="https://github.com/biswassandip/efolio/tree/main/e-folio-tasks/intelligent-agents/unit6" target="_blank" rel="noopener noreferrer">Unit 6: KQML and KIF</a></h4>
                </div>
              </article>
            
              <article className='ia__details'>
                <AiFillGithub className='ia__details-icon'/>
                <div>
                  <h4><a href="https://github.com/biswassandip/efolio/tree/main/e-folio-tasks/intelligent-agents/unit8" target="_blank" rel="noopener noreferrer">Unit 8: Consituency-based Trees</a></h4>
                </div>
              </article>

              <article className='ia__details'>
                <AiFillGithub className='ia__details-icon'/>
                <div>
                  <h4><a href="https://github.com/biswassandip/efolio/tree/main/e-folio-tasks/intelligent-agents/unit10" target="_blank" rel="noopener noreferrer">Unit 10: Deep Learning & Ethics</a></h4>
                </div>
              </article>

            </div>          
          </div>

          <div className="ia__AR">
          <h3>Team Projects</h3>
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