/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FaSortNumericDown } from 'react-icons/fa'
import { MdWbIncandescent } from 'react-icons/md'
import { VscServerProcess } from 'react-icons/vsc'
import { GiGiftOfKnowledge,GiArchiveResearch } from 'react-icons/gi'
import { SiProbot } from 'react-icons/si'
import { RiDatabaseLine } from "react-icons/ri";


import './nav.css'

import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../context'

const Nav = (props) => {
  const [activeNav, setActiveNav] = useState('#');

  const sectionValue = useContext(Context)

  return ( 
    <nav>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' || sectionValue==='about'? 'active' : ''}><AiOutlineUser/></a>
      <a href="#umodule" onClick={()=>setActiveNav('#umodule')} className={activeNav==='#umodule' || sectionValue==='umodule' ? 'active' : ''}><MdWbIncandescent/></a>
      <a href="#nmodule" onClick={()=>setActiveNav('#nmodule')} className={activeNav==='#nmodule' || sectionValue==='nmodule'  ? 'active' : ''}><FaSortNumericDown/></a>
      <a href="#mlmodule" onClick={()=>setActiveNav('#mlmodule')} className={activeNav==='#mlmodule' || sectionValue==='mlmodule'  ? 'active' : ''}><VscServerProcess/></a>
      <a href="#nlp" onClick={() => setActiveNav('#nlp')} className={activeNav === '#nlp' || sectionValue==='nlp'  ? 'active' : ''}><GiGiftOfKnowledge /></a>
      <a href="#ia" onClick={() => setActiveNav('#ia')} className={activeNav === '#ia' || sectionValue === 'ia' ? 'active' : ''}><SiProbot /></a>
      <a href="#rm" onClick={() => setActiveNav('#rm')} className={activeNav === '#rm' || sectionValue==='rm' ? 'active' : ''}><GiArchiveResearch /></a>
      <a href="#ds" onClick={() => setActiveNav('#ds')} className={activeNav === '#ds' || sectionValue==='ds' ? 'active' : ''}><RiDatabaseLine /></a>
    </nav>
  )
}

export default Nav