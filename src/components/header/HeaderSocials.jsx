import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sandip-biswas-2b206116/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>      
        <a href="https://github.com/biswassandip/efolio" target="_blank" rel="noopener noreferrer"><BsGithub/></a>      
    </div>
  )
}

export default HeaderSocials