import React from 'react'

import profile from '../../../../models/profile'
import './style.css'

const Testy = () => {
  const { name, imgUrl, website } = profile

  return (
    <section className='testy main-container'>
      <p className='testominy'>
        <span>Other</span> ad agencies didn’t seem to deliver the consistent
        flow of targeted traffic like <span>CryptoFix</span>
      </p>
      <div className='profile'>
        <img src={imgUrl} alt={name + "'s image"} />
        <span className='name'>{name}</span>
        <span className='website'>{website}</span>
      </div>
    </section>
  )
}

export default Testy
