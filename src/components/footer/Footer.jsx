import React from 'react'
import './footer.css'

import { BsLinkedin, BsGithub } from 'react-icons/bs'


const Footer = () => {
  return (
    <div id="#contact">
      <footer id="#contact">
      <div className='separator'/>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#umodule">Understanding AI</a></li>
          <li><a href="#nmodule">Numerical Analysis</a></li>
          <li><a href="#mlmodule">Machine Learning</a></li>
          <li><a href="#nlp">NLP</a></li>
        </ul>

        <div className="footer__socials">
          <li><a href="https://www.linkedin.com/in/sandip-biswas-2b206116/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></li>      
          <li><a href="https://github.com/biswassandip/efolio" target="_blank" rel="noopener noreferrer"><BsGithub/></a></li>      
        </div>
      </footer>
    </div>
  )
}

export default Footer