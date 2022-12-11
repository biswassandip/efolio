import React from 'react'
import { MdWbIncandescent } from 'react-icons/md'
import { FaSortNumericDown } from 'react-icons/fa'
import { VscServerProcess } from 'react-icons/vsc'

const CTA = () => {

  return (
    <div>
        <div className="cta">
          <a href="#umodule" className='btn btn-primary'><MdWbIncandescent/> Understanding AI</a>        
          <a href="#nmodule" className='btn btn-primary'><FaSortNumericDown/> Numerical Analysis</a>  
          <a href="#mlmodule" className='btn btn-primary'><VscServerProcess/> Machine Learning</a>  
        </div>      
    </div>
  )
}

export default CTA