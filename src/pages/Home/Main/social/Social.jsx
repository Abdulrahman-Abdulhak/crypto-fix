import React from 'react'

import { socials } from '../../../../models/social'

import Ready from '../../Ready/Ready'
import './style.css'

const Social = () => {
  return (
    <section className='social main-container'>
      <h3>Proudly used by..</h3>

      <ul className='social-media'>
        {socials.map(social => {
          return (
            <li
              key={social.id}
              aria-label={social.name}
              style={{
                '--_icon': `url(./src/assets/icons/companies/${social.icon})`,
              }}
            >
              <a href={social.link}></a>
            </li>
          )
        })}
      </ul>

      <Ready />
    </section>
  )
}

export default Social
