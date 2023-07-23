/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'
import { FaSortNumericDown } from 'react-icons/fa'
import { MdWbIncandescent } from 'react-icons/md'
import { VscServerProcess } from 'react-icons/vsc'
import { GiGiftOfKnowledge } from 'react-icons/gi'
import { SiProbot } from 'react-icons/si'

import './nav.css'

import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return ( 
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#umodule" onClick={()=>setActiveNav('#umodule')} className={activeNav==='#umodule' ? 'active' : ''}><MdWbIncandescent/></a>
      <a href="#nmodule" onClick={()=>setActiveNav('#nmodule')} className={activeNav==='#nmodule' ? 'active' : ''}><FaSortNumericDown/></a>
      <a href="#mlmodule" onClick={()=>setActiveNav('#mlmodule')} className={activeNav==='#mlmodule' ? 'active' : ''}><VscServerProcess/></a>
      <a href="#nlp" onClick={()=>setActiveNav('#nlp')} className={activeNav==='#nlp' ? 'active' : ''}><GiGiftOfKnowledge/></a>
      <a href="#ia" onClick={()=>setActiveNav('#ia')} className={activeNav==='#ia' ? 'active' : ''}><SiProbot/></a>
      {/* <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineContacts/></a> */}
    </nav>
  )
}

export default Nav