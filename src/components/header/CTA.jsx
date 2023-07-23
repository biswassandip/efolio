import React from 'react'
import { MdWbIncandescent } from 'react-icons/md'
import { FaSortNumericDown } from 'react-icons/fa'
import { VscServerProcess } from 'react-icons/vsc'
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa'

import {AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'
import { GiGiftOfKnowledge } from 'react-icons/gi'
import { SiProbot } from 'react-icons/si'

const CTA = () => {

  return (
    <div>
        <div className="cta">
          {/* <a href="#home" className='btn btn-primary'><AiOutlineHome /><br />Home</a>         */}
          <a href="#about" className='btn btn-primary'><AiOutlineUser /><br />Me </a>        
          <a href="#umodule" className='btn btn-primary'><MdWbIncandescent/> <br/>Understanding AI</a>        
          <a href="#nmodule" className='btn btn-primary'><FaSortNumericDown/> <br/>Numerical Analysis</a>  
          <a href="#mlmodule" className='btn btn-primary'><VscServerProcess/> <br/>Machine Learning</a>  
          <a href="#nlp" className='btn btn-primary'><FaAmericanSignLanguageInterpreting /> <br />NLP</a>  
          <a href="#krr" className='btn btn-primary'><GiGiftOfKnowledge/> <br/>KRR</a>          
          <a href="#ia" className='btn btn-primary'><SiProbot/> <br/>Intelli-Agents</a>          
          {/* <a href="#contact" className='btn btn-primary'><AiOutlineContacts/> <br/>Contact</a>         */}
        </div>      
        <div className="cta__icons">
          {/* <a href="#home" className='btn btn-primary'><AiOutlineHome /></a>         */}
          <a href="#about" className='btn btn-primary'><AiOutlineUser /></a>        
          <a href="#umodule" className='btn btn-primary'><MdWbIncandescent/></a>        
          <a href="#nmodule" className='btn btn-primary'><FaSortNumericDown/></a>  
          <a href="#mlmodule" className='btn btn-primary'><VscServerProcess/></a>  
          <a href="#nlp" className='btn btn-primary'><FaAmericanSignLanguageInterpreting/></a>  
          <a href="#krr" className='btn btn-primary'><GiGiftOfKnowledge/></a>        
          <a href="#ia" className='btn btn-primary'><SiProbot/></a>        
          <a href="#contact" className='btn btn-primary'><AiOutlineContacts/></a>        
        </div>      
    </div>
  )
}

export default CTA