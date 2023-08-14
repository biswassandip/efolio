import React, { useEffect, useRef, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'

import UnderstandingAI from './components/module_understanding_ai/UnderstandingAI'
import NumericalAnalysis from './components/module_numerical_analysis/NumericalAnalysis'
import MachineLearning from './components/module_machine_learning/MachineLearning'
import NLP from './components/module_NLP/NLP'
import IA from './components/module_ia/ia'


import Footer from './components/footer/Footer'

import {Context} from './components/context'

const App = () => {
  const aboutRef = useRef(null);
  const understandingAIRef = useRef(null);
  const numericalAnalysisRef = useRef(null);
  const machineLearningRef = useRef(null);
  const nlpRef = useRef(null);
  const iaRef = useRef(null);

  
  const [sectionValue, setSectionValue] = useState('#');

  const updateSectionValue = (value) => {
    setSectionValue(value);
  };

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  useEffect(() => {
    let observer
    if (
      aboutRef.current &&
      understandingAIRef.current &&
      numericalAnalysisRef.current &&
      machineLearningRef.current &&
      nlpRef.current &&
      iaRef.current
    ) {
      const options = {
        threshold: 0.2,
      }
      observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
          if (
            entry.isIntersecting
          ) { 
            updateSectionValue(entry.target.id);
          }
        })
      }, options)
      observer.observe(aboutRef.current)
      observer.observe(understandingAIRef.current)
      observer.observe(numericalAnalysisRef.current)
      observer.observe(machineLearningRef.current)
      observer.observe(nlpRef.current)
      observer.observe(iaRef.current)
    }
    return () => observer.disconnect()
  }, [aboutRef, understandingAIRef, numericalAnalysisRef, machineLearningRef, nlpRef, iaRef])



  return (
    <>
      <Context.Provider value={sectionValue}>
        <Header />
        <Nav />
        <About refName={aboutRef} />
        <UnderstandingAI refName={understandingAIRef} />
        <NumericalAnalysis refName={numericalAnalysisRef} />
        <MachineLearning refName={machineLearningRef} />
        <NLP refName={nlpRef} />
        <IA refName={iaRef} />
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App;
