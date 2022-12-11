import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Sandip Biswas</h1>
        <h5 className='text-light'>A Portfolio as part of M. Sc. in Artificial Intelligence, University of Essex</h5>
        <CTA />

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header