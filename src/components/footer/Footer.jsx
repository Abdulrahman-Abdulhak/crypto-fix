import React from 'react'

import Logo from '../logo/Logo'
import Links from './components/Links'
import { quickLinks } from '../../constants/quick-links'

import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className='main-container'>
        <div className='about'>
          <Logo />
          <p>492 Twisting Lane Beverly Hills, CA 90210 us</p>
        </div>
        <section className='quick-links'>
          {quickLinks.map((links, index) => (
            <Links key={`${links.title}:${index}`} links={links} />
          ))}
        </section>
      </div>
    </footer>
  )
}

export default Footer
