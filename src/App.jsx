import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'

import UnderstandingAI from './components/module_understanding_ai/UnderstandingAI'
import NumericalAnalysis from './components/module_numerical_analysis/NumericalAnalysis'
import MachineLearning from './components/module_machine_learning/MachineLearning'
import NLP from './components/module_NLP/NLP'


import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <UnderstandingAI />
      <NumericalAnalysis />
      <MachineLearning />
      <NLP />
      <Footer />
    </>
  )
}

export default App;
