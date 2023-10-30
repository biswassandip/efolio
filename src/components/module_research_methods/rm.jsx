import React from 'react'

import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
// import { SiProbot } from 'react-icons/si'
// import { AiFillGithub } from 'react-icons/ai'
import { GiArchiveResearch } from 'react-icons/gi'
import {GrDocumentZip}  from 'react-icons/gr'

import ARTEFACT1 from '../../artefacts/Discussion-Case-Dark_UX.pdf'
import ARTEFACT2 from '../../artefacts/Unit1_Reasoning_Quiz.pdf'
import ARTEFACT3 from '../../artefacts/Reflective-Ethics_in_computing.pdf'
import ARTEFACT4 from '../../artefacts/Literature-Review_Microservices_in_E-commerce.pdf'
import ARTEFACT5 from '../../artefacts/Unit-7_Collaborative_Discussion_2.pdf'
import ARTEFACT6 from '../../artefacts/Unit10_Research_proposal.pdf'
import ARTEFACT7 from '../../artefacts/Unit10_Research_proposal_Transcript.pdf'
import ARTEFACT8 from '../../artefacts/Exercises-8-Hypothesis_Testing.pdf'
import ARTEFACT9 from '../../artefacts/Exercises-8_Summary-Measures.pdf'
import ARTEFACT10 from '../../artefacts/Exercises-8_xls-Inferential_Statistics.zip'
import ARTEFACT11 from '../../artefacts/Exercises-9_xls-Analysing_Qualitative_Data.zip'



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
            <b>Research methods and professional practice</b> are essential components of the modern world.
            Conducting scientific investigations with ethical considerations is the foundation of discovering
            new knowledge, making informed decisions, and progressing professional fields.
            <br />
            <br />
            Ethics in research is essential to ensure the integrity and credibility of <b>scientific work</b>.
            The module deep dives into the principles that researchers must adhere to ethical principles such as
            informed consent (Haggerty & Brown, 2016), confidentiality (Gall, Gall, & Borg, 2007), and minimizing harm
            to participants (Mertens, 2015).
            <br />
            <br />
            Informed consent requires researchers to obtain voluntary and informed agreement from participants
            before involving them in any study. Confidentiality requires researchers to protect the privacy and anonymity of
            participants by safeguarding their personal information. Minimizing harm requires researchers to assess potential
            risks and take steps to mitigate them.
            <br />
            <br />
            The module further enbales in the understanding on a research project that is essential to formulate clear &nbsp;
            <b>research questions</b>, conduct a comprehensive <b>literature review</b>, and develop a well-structured  &nbsp;
            <b>research proposal</b> (Creswell & Creswell, 2017; Boote & Beile,2005; Locke, Silverman, & Spirduso, 2019).            
            <br />
            <br />
            Further <b>Research questions</b> serve as the guiding framework for the entire research process and should be SMART
            (specific, measurable, achievable, relevant, and time-bound).
          </p>

          <p>
            Choosing <b>research methods</b> is crucial, depending on questions, data collection, and analysis requirements 
            (Creswell & Creswell, 2017). Quantitative methods involve collecting and analyzing numerical data to test hypotheses
            and establish causal relationships (Creswell & Creswell, 2017). Qualitative methods focus on understanding complex 
            phenomena by collecting and analyzing non-numerical data (Merriam & Tisdell, 2016). Mixed-methods research combines 
            both approaches to gain a more comprehensive understanding (Creswell & Creswell, 2017).            
            <br />
            <br />
            The module is provides with discussions and tasks that creates an understanding about the <b>Interview, Survery Methods,
            Questionnaire designs, etc.</b>
            <br />
            <br />
            Interviews involve one-on-one or group discussions with participants to gather information (Kvale & Brinkmann, 2009).
            <br />
            <br />
            Survey methods involve the administration of questionnaires or surveys to a large number of participants (Dillman, Smyth, & Christian,
            2014). 
            <br />
            <br />
            Surveys are often used to collect quantitative data on a wide range of topics. Researchers design surveys with
            carefully crafted questions and response options to ensure data validity and reliability.
            Questionnaire design begins with clear and concise writing of questions (Dillman et al., 2014). Questions should be
            free from ambiguity, double negatives, and leading language. 
          </p>

          <p>
            Pilot testing is essential to identify and address any issues with the questionnaire (Dillman et al., 2014).
            Researchers should conduct pretests with a small sample of participants to ensure that questions are easily understood and
            that the survey flows smoothly.
            <br />
            <br />
            Generalizability relates to the extent to which research findings can be applied to a larger population or context 
            (Trochim & Donnelly, 2008). To enhance generalizability, researchers should use random sampling techniques and ensure 
            that their study sample is representative of the larger population of interest. 
            <br />
            <br />
            Scientific research must be ethical and rigorous, with clear questions, comprehensive literature reviews, and well-structured 
            proposals. The choice of methods depends on the objectives and data requirements. Qualitative methods like case studies, 
            focus groups, and observations provide rich insights, while interviews and surveys are common data collection methods with 
            their own strengths and weaknesses. Effective questionnaire design is crucial for reliable survey data. Validity and 
            generalizability are essential for the credibility and applicability of research findings.            
          </p>
                      
          <div className="rm__LO">
            <h3>Learning Outcomes</h3>
            <div className="rm__content">

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Understand the ethical principles underpinning scientific investigation</h4>
                </div>
              </article>

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Develop clear and focused research questions</h4>
                </div>
              </article>

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Conduct a thorough literature review to inform research design</h4>
                </div>
              </article>

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Craft a well-structured research proposal to secure funding and approval</h4>
                </div>
              </article>

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Choose appropriate research methods based on research objectives</h4>
                </div>
              </article>

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Gain proficiency in conducting interviews and surveys</h4>
                </div>
              </article>
              
              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Design questionnaires effectively to gather reliable data</h4>
                </div>
              </article>

              <article className='rm__details'>
                <IoMdArrowRoundForward className='rm__details-icon'/>
                <div>
                  <h4>Evaluate and ensure the validity and generalizability of research findings</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="rm__AR">
          <h3>Assignments & Discussions</h3>
            <div className="rm__content">

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>Discussion: Dark UX</a>
                  </h4>
                </div>
              </article>

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT2} target='_blank' rel='noopener noreferrer'>Reasoning Quiz</a>
                  </h4>
                </div>
              </article>

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT3} target='_blank' rel='noopener noreferrer'>Reflective: Ethics in Computing</a>
                  </h4>
                </div>
              </article>

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT4} target='_blank' rel='noopener noreferrer'>Literature Review: Microservices in E-commerce</a>
                  </h4>
                </div>
              </article>

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT5} target='_blank' rel='noopener noreferrer'>Discussion: Ethical Considerations</a>
                  </h4>
                </div>
              </article>
              
              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT6} target='_blank' rel='noopener noreferrer'>Research Proposal: Elderly Care & AI</a>
                  </h4>
                </div>
              </article>
              
              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT7} target='_blank' rel='noopener noreferrer'>Research Proposal Transcript</a>
                  </h4>
                </div>
              </article>
              
            </div>          
          </div>        

          <div className="rm__CO">
            <h3>Exercises</h3>
            <div className="rm__content">

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT8} target='_blank' rel='noopener noreferrer'>Hypothesis Testing</a>
                  </h4>
                </div>
              </article>

              <article className='rm__details'>
                <BsFileEarmarkPdfFill className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT9} target='_blank' rel='noopener noreferrer'>Summary Measures</a>
                  </h4>
                </div>
              </article>
              
              <article className='rm__details'>
                <GrDocumentZip className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT10} target='_blank' rel='noopener noreferrer'>Excel workbooks: Inferential Statistics & Summary Measures</a>
                  </h4>
                </div>
              </article>
            
              <article className='rm__details'>
                <GrDocumentZip className='rm__details-icon'/>
                <div>
                  <h4>
                      <a href={ARTEFACT11} target='_blank' rel='noopener noreferrer'>Excel workbooks: Analysing Qualitative Data</a>
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