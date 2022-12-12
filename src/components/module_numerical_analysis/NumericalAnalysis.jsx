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
      <div className='separator'>
        <span className="text">
          <FaSortNumericDown/> Module: Numerical Analysis
        </span>
      </div>

    <section id='nmodule' className='nmodule'>
        <center>
          <h5>(Module started on June 2022)</h5>
        </center>
        <br/>
      
        <div className="container nmodule__container">
          <p>
            The mathematics behind all the analytical work is covered within this module. It elaborates about the statistical analysis, the tests and the inferences that can be made and applied to gather information about a population from samples.
            <br />
            <br />
            It builds the basis of Descriptive Statistical Analysis, Inferential Statistics to Regression Analysis. Moreover, the application of chi-, f- or t-tests and how to dtermine the results from sample datasets gets a better understanding for future analytical applications.
          </p>
          <p>
            The understanding was revealed when ran a statistical analysis using the UK alcohol use (2011) dataset. It called for learning R, Python deeper and how these can be run using the RStudio. 
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
                      <a href={ARTEFACT1} download>Statistical Analysis on UK Alcohol Use (2011)</a>
                  </h4>
                </div>
              </article>
            
              <article className='nmodule__details'>
                <BsFileEarmarkPdfFill className='nmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} download>Supporting transcript for the Analysis</a>
                  </h4>
                </div>
              </article>

              <article className='nmodule__details'>
                <BsFileEarmarkCodeFill className='nmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT3} download>R script used for the analysis</a>
                  </h4>
                </div>
              </article>
              
              <article className='nmodule__details'>
                <BsFileEarmarkPdfFill className='nmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT4} download>Individual Reflection</a>
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