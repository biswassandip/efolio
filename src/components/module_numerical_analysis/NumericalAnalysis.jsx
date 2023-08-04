import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { BsFileEarmarkCodeFill } from 'react-icons/bs'
import { FaSortNumericDown } from 'react-icons/fa'

import ARTEFACT1 from '../../artefacts/statistical_analysis.pdf'
import ARTEFACT2 from '../../artefacts/statistical_analysis_transcript.pdf'
import ARTEFACT3 from '../../artefacts/statistical_analysis_script.R'
import ARTEFACT4 from '../../artefacts/statistical_analysis_reflection.pdf'


import './nmodule.css'

const NumericalAnalysis = () => {
  return (
    <div id="nmodule">

    <section id='nmodule' className='nmodule'>

      <div className='separator'>
        <span className="nmodule__header">
          <FaSortNumericDown/> Module: Numerical Analysis
          </span>
          <h5 className='nmodule__subheader'>(Module started on June 2022)</h5>
      </div>

        <br/>
      
        <div className="container nmodule__container">
          
          <p>
            Numerical analysis plays a crucial role in the realm of Artificial Intelligence (AI), serving as the bedrock
            upon which AI algorithms and models are built and refined. It empowers AI practitioners to extract meaningful
            insights from data, make informed decisions, and create predictive and prescriptive models. This module delves
            into the intersection of numerical analysis and AI, shedding light on how mathematical techniques are harnessed
            to enhance the capabilities of AI systems.
            <br />
            <br />
            This module not only covers the foundational aspects of numerical analysis but also delves into its practical
            applications within AI. From statistical analysis to hypothesis testing, from descriptive summaries to complex
            regression models, the module equips learners with the tools to harness the power of data in the AI landscape.
          </p>
          <p>
            The mathematics behind all the analytical work is covered within this module. It elaborates about the statistical
            analysis, the tests, and the inferences that can be made and applied to gather information about a population from
            samples.
            <br />
            <br />
            It builds the basis of Descriptive Statistical Analysis, Inferential Statistics to Regression Analysis. Moreover,
            the application of chi-, f- or t-tests and how to determine the results from sample datasets gets a better understanding
            for future analytical applications.
            <br />
            <br />
            The understanding was revealed when running a statistical analysis using the UK alcohol use (2011) dataset. It called for
            learning R, Python deeper and how these can be run using the RStudio.
          </p>
          <p>
            In the rapidly evolving landscape of Artificial Intelligence, numerical analysis stands as a steadfast pillar, enabling AI
            professionals to navigate the complexities of data-driven decision-making.
            <br />
            <br />            
            This module's comprehensive exploration of numerical analysis not only imparts theoretical knowledge but also emphasizes its
            tangible application in AI contexts. By mastering these techniques, learners are better equipped to unravel patterns, draw
            inferences, and unlock the full potential of AI algorithms.
            As demonstrated through the examination of the UK alcohol use dataset, numerical analysis, when coupled with proficiency in
            programming languages like R and Python, becomes a formidable tool for shaping the future of AI-driven innovation.
          </p>

          <div className="nmodule__LO">
            <h3>Learning Outcomes</h3>
            <div className="nmodule__content">

              <article className='nmodule__details'>
                <IoMdArrowRoundForward className='nmodule__details-icon'/>
                <div>
                  <h4>Importance of Statistics behind AI</h4>
                </div>
              </article>
            
              <article className='nmodule__details'>
                <IoMdArrowRoundForward className='nmodule__details-icon'/>
                <div>
                  <h4>Data Structures, Algorithms and R & Python</h4>
                </div>
              </article>

              <article className='nmodule__details'>
                <IoMdArrowRoundForward className='nmodule__details-icon'/>
                <div>
                  <h4>Application of Descriptive and Inferential Statistics </h4>
                </div>
              </article>

              <article className='nmodule__details'>
                <IoMdArrowRoundForward className='nmodule__details-icon'/>
                <div>
                  <h4>Tests: Parametric, Normality with t and F tests </h4>
                </div>
              </article>

              <article className='nmodule__details'>
                <IoMdArrowRoundForward className='nmodule__details-icon'/>
                <div>
                  <h4>Interpretation of data and chi-square analysis</h4>
                </div>
              </article>

              <article className='nmodule__details'>
                <IoMdArrowRoundForward className='nmodule__details-icon'/>
                <div>
                  <h4>Correlations and Regression Analysis</h4>
                </div>
              </article>
          </div>
          </div>



          <div className="nmodule__AR">
            <h3>Assignments</h3>
            <div className="nmodule__content">

              <article className='nmodule__details'>
                <BsFileEarmarkPdfFill className='nmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>Statistical Analysis on UK Alcohol Use (2011)</a>
                  </h4>
                </div>
              </article>
            
              <article className='nmodule__details'>
                <BsFileEarmarkPdfFill className='nmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} target='_blank' rel='noopener noreferrer'>Supporting transcript for the Analysis</a>
                  </h4>
                </div>
              </article>

              <article className='nmodule__details'>
                <BsFileEarmarkCodeFill className='nmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT3} target='_blank' rel='noopener noreferrer'>R script used for the analysis</a>
                  </h4>
                </div>
              </article>
              
              <article className='nmodule__details'>
                <BsFileEarmarkPdfFill className='nmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT4} target='_blank' rel='noopener noreferrer'>Individual Reflection</a>
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

export default NumericalAnalysis