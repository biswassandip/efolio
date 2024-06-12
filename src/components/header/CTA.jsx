import React from 'react'
import { MdWbIncandescent } from 'react-icons/md'
import { FaSortNumericDown } from 'react-icons/fa'
import { VscServerProcess } from 'react-icons/vsc'

import {AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'
import { GiGiftOfKnowledge, GiArchiveResearch } from 'react-icons/gi'
import { SiProbot } from 'react-icons/si'
import { RiDatabaseLine } from "react-icons/ri";

import './header.css'

const CTA = () => {

  return (
    <div>
        <div className="cta">
          {/* <a href="#home" className='btn btn-primary'><AiOutlineHome /><br />Home</a>         */}
          <a href="#about" className='btn btn-primary'><AiOutlineUser /> Me </a>
          <a href="#umodule" className='btn btn-primary'><MdWbIncandescent/> Understanding AI</a>
          <a href="#nmodule" className='btn btn-primary'><FaSortNumericDown/> Numerical Analysis</a>
          <a href="#mlmodule" className='btn btn-primary'><VscServerProcess/> Machine Learning</a>
          <a href="#nlp" className='btn btn-primary'><GiGiftOfKnowledge /> KR&R</a>  
          <a href="#ia" className='btn btn-primary'><SiProbot /> Intelli-Agents</a>
          <a href="#rm" className='btn btn-primary'><GiArchiveResearch /> Research Methods</a>
          <a href="#ds" className='btn btn-primary'><RiDatabaseLine /> Dissertation</a>
        
          {/* <a href="#contact" className='btn btn-primary'><AiOutlineContacts/> <br/>Contact</a>         */}
        </div>      
        <div className="cta__icons">
          {/* <a href="#home" className='btn btn-primary'><AiOutlineHome /></a>         */}
          <a href="#about" className='btn btn-primary'><AiOutlineUser /></a>
          <a href="#umodule" className='btn btn-primary'><MdWbIncandescent/></a>
          <a href="#nmodule" className='btn btn-primary'><FaSortNumericDown/></a>
          <a href="#mlmodule" className='btn btn-primary'><VscServerProcess/></a>
          <a href="#nlp" className='btn btn-primary'><GiGiftOfKnowledge/></a>
          <a href="#ia" className='btn btn-primary'><SiProbot /></a>
          <a href="#rm" className='btn btn-primary'><GiArchiveResearch/></a>
          <a href="#ds" className='btn btn-primary'><RiDatabaseLine/></a>
          <a href="#contact" className='btn btn-primary'><AiOutlineContacts/></a>
        </div>      
    </div>
  )
}

export default CTA