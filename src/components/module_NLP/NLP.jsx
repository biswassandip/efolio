import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { GiDiscussion } from 'react-icons/gi'
import { GiGiftOfKnowledge } from 'react-icons/gi'

import ARTEFACT1 from '../../artefacts/KRR-Case-Study.pdf'
import ARTEFACT2 from '../../artefacts/Library-Search-Prototype.pdf'
import ARTEFACT3 from '../../artefacts/KRR-Individual-Reflection.pdf'


import './nlp.css'

const NLP = () => {
  return (
    <div id="nlp">
      <div className='separator'>
        <span className="text">
          <GiGiftOfKnowledge/> Module: Knowledge Representation & Reasoning (KR&R)
        </span>
      </div>
      
      <section id='nlp' className='nlp'>
        <center>
          <h5>(Module started on January 2023)</h5>
        </center>
        <br/>
        <div className="container nlp__container">

          <p>
            The Knowledge representation and reasoning (KR&R) module within Artificial Intelligence (AI) was the most challenging and exciting of the modules as it dealt with understanding how and why of the representation of knowledge so that machines can use it to solve problems. The objective of KRR is to build a model that is coupled with accuracy and efficiency.
            <br/>
            <br/>
            The fundamental area of NLP is KR&R. It enables machines to comprehend and process human-like knowledge to facilitate automated intelligent behaviour. KR&R forms the backbone of various NLP tasks, such as question answering, information retrieval, and natural language understanding, by encoding knowledge in a structured format and employing reasoning mechanisms to draw inferences. 
          </p>
            <p>            
            Its all about representation of knowledge in a formal and structured that builds an effective reasoning with supporting knowledge integration.
            This is acheived with Ontology that plays a crucial role in the building of systems that can understand, interpret, and reason over complex information.
            <br />
            <br />            
            Ontologies have become a part of the W3C standards as a building block to Semantic Technology by providing a required structure to stitch information with other pieces of data on the Web.
          </p>
            <p>
            A case review, “Ontology development for agriculture domain”, on the paper <i>The paper, Malik, N., Sharan, A. & Hijam, D. (2015) March. Ontology development for agriculture domain. In 2015 2nd International Conference on Computing for Sustainable Global Development (INDIACom) (pp. 738-742). IEEE</i> as an exercise revealed how the representation of knowledge can be shared, re-used and build knowledge about the domain, all the descriptions and unstructured pieces of information.
            <br />
            <br />
            Concluded the module by building a prototype using Ontology and Protege for a Library Search System.
          </p>
                      
          <div className="nlp__LO">
            <h3>Learning Outcomes</h3>
            <div className="nlp__content">

              <article className='nlp__details'>
                <IoMdArrowRoundForward className='nlp__details-icon'/>
                <div>
                  <h4>Why KR&R and how NLP integrates?</h4>
                </div>
              </article>
            
              <article className='nlp__details'>
                <IoMdArrowRoundForward className='nlp__details-icon'/>
                <div>
                  <h4>Formal structuring & Tools - Ontology, Protege</h4>
                </div>
              </article>

              <article className='nlp__details'>
                <IoMdArrowRoundForward className='nlp__details-icon'/>
                <div>
                  <h4>Evaluate knowledge-based systems and atheir applications </h4>
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
                  <h4>Formal approaches to KR&R</h4>
                </div>
              </article>
            
              <article className='nlp__details'>
                <GiDiscussion className='nlp__details-icon'/>
                <div>
                  <h4>Properties and their criticality in knowledge-based systems</h4>
                </div>
              </article>

              <article className='nlp__details'>
                <GiDiscussion className='nlp__details-icon'/>
                <div>
                  <h4>Modelling Techniques for KR&R</h4>
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
                      <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>Case Study</a>
                  </h4>
                </div>
              </article>
            
              <article className='nlp__details'>
                <BsFileEarmarkPdfFill className='nlp__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} target='_blank' rel='noopener noreferrer'>Library Search Prototype</a>
                  </h4>
                </div>
              </article>

              <article className='nlp__details'>
                <BsFileEarmarkPdfFill className='nlp__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT3} target='_blank' rel='noopener noreferrer'>Individual Reflection</a>
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