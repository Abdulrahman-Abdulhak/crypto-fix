import classNames from 'classnames'
import React from 'react'

import email from '../../../assets/icons/email.svg'
import phone from '../../../assets/icons/phone.svg'

const Links = ({ links }) => {
  return (
    <div className='links'>
      <h3 className='links-head'>{links.title}</h3>
      <ul>
        {links.links.map((link, index) => {
          const classes = classNames(link.classes)
          let icon
          if (link.ref.startsWith('mailto:')) {
            icon = email
          } else if (link.ref.startsWith('tel:')) {
            icon = phone
          }

          return (
            <li className={classes} key={`${link.label}:${index}`}>
              <a href={`${link.ref}`}>
                {icon ? <img src={icon} alt='' /> : null}
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Links
