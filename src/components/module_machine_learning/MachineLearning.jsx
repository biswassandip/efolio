import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { AiOutlineTeam } from 'react-icons/ai'
import { VscServerProcess } from 'react-icons/vsc'
import { BsFileEarmarkCodeFill } from 'react-icons/bs'

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { GiHypersonicMelon, GiSupersonicBullet } from 'react-icons/gi'



import ARTEFACT1 from '../../artefacts/Teamwork-Airbnb_Analysis.pdf'
import ARTEFACT2 from '../../artefacts/airbnb-team-project.ipynb'
import ARTEFACT3 from '../../artefacts/Teamwork-Summative_Assessment-NeuralNetworks.pdf'
import ARTEFACT4 from '../../artefacts/Teamwork-Transcript-Summative_Assessment.pdf'
import ARTEFACT5 from '../../artefacts/Machine_Learning-Individual_Reflection.pdf'


import './mlmodule.css'

const MachineLearning = () => {
  return (
    <div id="mlmodule">

    <section id='mlmodule' className='mlmodule'>
      <div className='separator'>
        <span className="mlmodule__header">
          <VscServerProcess/> Module: Machine Learning
          </span>
          <h5 className='mlmodule__subheader'>(Module started on September 2022)</h5>
      </div>

        <br/>

        <div className="container mlmodule__container">    
          <p>
            Machine Learning, a dynamic field within Artificial Intelligence, serves as the backbone of intelligent systems.
            It empowers these systems to learn from data, adapt to new information, and improve their performance over time.
            In the context of this learning journey, the Machine Learning module emerged as a pivotal gateway to unravel the
            intricacies of data exploration, inference, and the seamless integration of these concepts into the broader landscape
            of Artificial Intelligence.
            <br/>
            <br/>
            Delving into the specifics of the module, it embarked on an enlightening exploration of data, fostering a profound
            comprehension of how information can be extracted and insights can be gleaned. This foundational understanding then
            paved the way for the implementation of Neural Networks, a cornerstone of modern AI. Equipped with this knowledge,
            we seamlessly transitioned into the domain of data handling, mastering the art of managing data samples to drive
            meaningful outcomes.
          </p>
          <p>
            One of the module's crowning achievements was demystifying the enigma of object recognition. Through meticulous
            study and hands-on experience, we unveiled the underlying principles governing this process, enabling us to not
            only classify objects but also delve into more advanced realms of object detection. This was a pivotal step in
            unraveling the complexity of how machines perceive and interact with the world around them.
            <br/>
            <br/>
            As the learning journey progressed, the module introduced the concept of collaborative learning through team assignments.
            This dimension added an extra layer of challenge, fostering proficiency in teamwork, efficient meeting structures,
            comprehensive note-taking, task execution, and critical performance reviews. Notably, a captivating project emerged,
            centered around conducting a strategic business analysis of Airbnb's vast dataset. Our mission was to devise optimal
            pricing strategies for Airbnb room listings, based on specific geographical considerations. This endeavor required us to
            navigate through Python's exploratory data analysis libraries and skillfully set up Jupyter notebooks.
          </p>
          <p>
            Amidst this immersive experience, the narrative took an exciting twist with the emergence of Artificial Neural Networks (ANNs).
            This segment offered a comprehensive understanding of ANNs, their pivotal role in driving the ongoing industrial revolution,
            and their transformative impact on AI. I acquired a profound grasp of applying ANN techniques, delving into the meticulous
            design and definition of ANN components. This experience unveiled the multifaceted functions that underpin ANNs' effectiveness,
            fostering a holistic comprehension of their potential in shaping the future of Artificial Intelligence.
            <br/>
            <br />
            In the contemporary landscape, Machine Learning stands as the driving force behind a multitude of cutting-edge technologies
            and applications that have become ubiquitous in our daily lives. Take, for instance, the realm of natural language processing,
            where advanced Machine Learning models enable chatbots and virtual assistants to comprehend and respond to human language nuances
            with astounding accuracy. These AI-powered companions, found in smartphones and smart home devices, seamlessly integrate into our
            routines, making tasks more efficient and engaging.
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
                      <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>Teamwork: Airbnb EDA</a>
                  </h4>
                </div>
              </article>
            
              <article className='mlmodule__details'>
                <BsFileEarmarkCodeFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} target='_blank' rel='noopener noreferrer'>Teamwork: Jupyter notebook (code)</a>
                  </h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT3} target='_blank' rel='noopener noreferrer'>Teamwork: Summative Assessment of Neural Networks</a>
                  </h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT4} target='_blank' rel='noopener noreferrer'>Teamwork: Transcript for Summative Assessment</a>
                  </h4>
                </div>
              </article>

              <article className='mlmodule__details'>
                <BsFileEarmarkPdfFill className='mlmodule__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT5} target='_blank' rel='noopener noreferrer'>Individual Reflection</a>
                  </h4>
                </div>
              </article>
              
            </div>          
          </div>        
        </div>

        <div className="container mlmodule__feedback">
          <div className="mlmodule__F0">
            <h3>Team Feedbacks</h3>
            <p><GiHypersonicMelon/> &nbsp;&nbsp;Vasilisa Lukashevich</p>
            <p>
              <ImQuotesLeft />
              <i>
                &nbsp;&nbsp;Sandip is a solid core for our team, conducting the whole process with responsibility and professional approach. During every step in both projects he proves to be a very strong team leader, an excellent Python user, and an amazing time manager. Last but not least, Sandip is a polite and kind person, so it is an absolute pleasure to work together.&nbsp;&nbsp;                
              </i>
              <ImQuotesRight/>
            </p>
            <br/><br/>
            <p><GiSupersonicBullet/> &nbsp;&nbsp;Nithya Kanakavelu</p>
            <p>
              <ImQuotesLeft />
              <i>
                &nbsp;&nbsp;Sandip lead the team to right direction on both the projects. He made remarkable contribution to the team projects and motivated us throughout. He contributed towards exploratory data analysis and visualization in the initial project and in CNN modelling for final project. I would look forward in working with him in future too.&nbsp;&nbsp;                
              </i>
              <ImQuotesRight/>
            </p>
          </div>
        </div>
      </section>
      </div>
  )
}

export default MachineLearning