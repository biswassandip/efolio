import React from 'react'
import { RiDatabaseLine } from "react-icons/ri";
import { BsFileEarmarkPdfFill } from 'react-icons/bs'

import ARTEFACT1 from '../../artefacts/MSC-Dissertation-Understanding-BIAS-in-ML.pdf'

import './ds.css'

const DS = (props) => {
  return (
    <div id="ds">
      
      <section id='ds' className='ds' ref={props.refName}>
        <div className='separator'>
          <span className="ds__header">
            <RiDatabaseLine/> Dissertation
          </span>
          <h5 className='ds__subheader'>(December 2023 - June 2024)</h5>
        </div>
        <br/>
        <div className="container ds__container">

          <p>
            <b>Topic: Understanding Bias in Using Machine Learning for Loan and Credit Guidance.</b> 

            <br />
            <br />
            Imagine a world where your ability to get a loan isn't just about your credit score, but potentially
            influenced by your gender, race, or even where you live.  That's the risk with machine learning (ML)
            in lending.  While ML promises faster decisions and wider access to credit, it can also amplify biases
            lurking in historical data or even create new ones unintentionally.
            <br />
            <br />
            The real danger is that these biased algorithms can perpetuate inequality – making it harder for certain groups
            to get loans, buy homes, or start businesses.  That's why it's crucial to find ways to fix these algorithms.
            The dissertation explores several "de-biasing" techniques, kind of like adjusting a recipe to get a fairer outcome.
            But it's not always easy – sometimes fixing bias can make the model less accurate overall.
            <br />
            <br />
            The bigger picture?  It's not just about the tech; it's about ethics and fairness.  We need these lending tools to
            serve everyone equitably, and that means constantly checking for bias, making adjustments, and ensuring transparency.
            The stakes are high – biased algorithms can damage trust in financial institutions and perpetuate social inequalities.
            <br />
          </p>

          <p>
            This dissertation comprehensively investigates the presence and impact of bias in machine learning (ML) algorithms applied
            to loan and credit guidance.  Key points include:
            <br />
            <br />
            <b>Types of Bias:</b> The research identifies and analyzes historical bias, representation bias, measurement bias, and proxy bias.
            <br />
            <br />
            <b>Real-World Consequences:</b> The dissertation explores how biased algorithms can perpetuate systemic inequality, erode trust in
            financial institutions, and lead to legal and reputational consequences.
            <br />
            <br />
            <b>Mitigation Strategies:</b> The research evaluates various techniques to reduce bias in ML models, acknowledging the potential
            trade-off between fairness and predictive accuracy.
            <br />
            <br />
            <b>Ethical Considerations:</b> The dissertation underscores the ethical imperative of ensuring fairness and equity in lending
            practices, particularly when utilizing AI and ML technologies.
            <br />
            <br />
            <b>Research Methodology:</b> The study employs a systematic literature review, synthesizing existing knowledge and identifying gaps
            for future research.
            <br />
            <br />
            <b>Recommendations:</b> The dissertation concludes with recommendations for financial institutions on building, auditing, and mitigating
            bias in ML-driven credit systems.
          </p>
          <p>
            <b>Analysis, Observation, and Conclusion:</b>
            <br />
            <br />
            <b>Analysis:</b> The thorough literature review reveals the complexity of bias in ML and highlights the need for a multi-pronged
            approach to address it.
            <br />
            <br />
            <b>Observation:</b> The dissertation observes a gap in research focused on real-world data and the dynamic nature of bias in ML
            models.
            <br />
            <br />
            <b>Conclusion:</b> The research concludes that a combination of algorithmic auditing, bias mitigation techniques, explainability,
            and robust governance is necessary for promoting fairer lending outcomes.
            <br />
            <br />
            <b>Key Takeaways:</b>
            <br />
            <br />
            Bias in ML-based lending is a complex, multifaceted issue with significant social and economic consequences.
            <br />
            <br />            
            A holistic approach, encompassing technical, ethical, and regulatory considerations, is crucial for mitigating bias and
            ensuring equitable access to financial opportunities.
            <br />
            <br />            
            
            <div className="ds__LO">
            <h3>Complete dissertation can be found here:</h3>
                  <BsFileEarmarkPdfFill className='ds__details-icon'/>
                  <a href={ARTEFACT1} target='_blank' rel='noopener noreferrer'>&nbsp;&nbsp;Understanding Bias in Using Machine Learning for Loan and Credit Guidance</a>
            </div>        

          </p>
                          
          
        </div>

      </section>
      </div>
  )
}

export default DS