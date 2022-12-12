import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { AiOutlineTeam } from 'react-icons/ai'
import { VscServerProcess } from 'react-icons/vsc'
import { BsFileEarmarkCodeFill } from 'react-icons/bs'


import ARTEFACT1 from '../../artefacts/Teamwork-Airbnb_Analysis.pdf'
import ARTEFACT2 from '../../artefacts/airbnb-team-project.ipynb'
import ARTEFACT3 from '../../artefacts/Teamwork-Summative_Assessment-NeuralNetworks.pdf'
import ARTEFACT4 from '../../artefacts/Teamwork-Transcript-Summative_Assessment.pdf'
import ARTEFACT5 from '../../artefacts/Machine_Learning-Individual_Reflection.pdf'


import './mlmodule.css'

const MachineLearning = () => {
  return (
    <div id="mlmodule">
      <div className='separator'>
        <span className="text">
          <VscServerProcess/> Module: Machine Learning
        </span>
      </div>

    <section id='mlmodule' className='mlmodule'>
              <center>
          <h5>(Module started on September 2022)</h5>
        </center>
        <br/>

        <div className="container mlmodule__container">
          
          <p>
            The Machine Learning module further elaborated on building the concepts around exploring the data and inferring from them. It helped build a strong base to implement Neural Networks and then handle the samples. This module helped in understanding the concepts behind object recognition and its segregation. Going further in providing an understanding of how machines perceive data and how objects can be classified. It also delves into the deeper side of object detection            
          </p>
          <p>
            The journey was made more challenging by providing knowledge by introducing team assignments. We, as a group, ran through proper meeting setups, note-taking, actions and tasks, followed by reviews. It was an interesting project of doing a business analysis on the “Airbnb” dataset for our defined business case of “competitive prices for Airbnb room listings based on locality”. The preparation involved brushing through EDA libraries used in Python and then setting up Jupyter notebook.            
          </p>
          <p>
            The journey became more interesting with the introduction of Artificial Neural Networks (ANNs), which provided comprehensive knowledge about ANNs and their effectiveness in the industrial revolution. I was able to gain knowledge on the application of ANN techniques by defining & designing the ANN artefacts by understanding the different functions used for ANN.
          </p>

          <div className="mlmodule__LO">
            <h3>Learning Outcomes</h3>
            <div className="mlmodule__content">

              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Understanding the datasets. Review & Cleanse</h4>
                </div>
              </article>
            
              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Applying EDA and inferring the outcome</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Understanding the challenges with datasets & variants</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Individual and Teamwork skills development</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <IoMdArrowRoundForward className='mlmodule__details-icon'/>
                <div>
                  <h4>Application of ML techniques</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="mlmodule__CO">
            <h3>Teamwork</h3>
            <div className="mlmodule__content">

              <article className='mlmodule__details'>
                <AiOutlineTeam className='mlmodule__details-icon'/>
                <div>
                  <h4>Research, Preparation, Problem Solving and Analysis</h4>
                </div>
              </article>
            
              <article className='mlmodule__details'>
                <AiOutlineTeam className='mlmodule__details-icon'/>
                <div>
                  <h4>Preparing collaborative environment</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <AiOutlineTeam className='mlmodule__details-icon'/>
                <div>
                  <h4>Collaborative documentation and review comments</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <AiOutlineTeam className='mlmodule__details-icon'/>
                <div>
                  <h4>Understanding the datasets & code flow</h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <AiOutlineTeam className='mlmodule__details-icon'/>
                <div>
                  <h4>Implementing tests and running against samples</h4>
                </div>
              </article>
            </div>          
          </div>

          <div className="mlmodule__AR">
            <h3>Assignments</h3>
            <div className="mlmodule__content">

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT1} download>Teamwork: Airbnb EDA</a>
                  </h4>
                </div>
              </article>
            
              <article className='mlmodule__details'>
                <BsFileEarmarkCodeFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} download>Teamwork: Jupyter notebook (code)</a>
                  </h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT3} download>Teamwork: Summative Assessment of Neural Networks</a>
                  </h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT4} download>Teamwork: Transcript for Summative Assessment</a>
                  </h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT5} download>Individual Reflection</a>
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

export default MachineLearning