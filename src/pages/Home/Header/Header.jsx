import React from 'react'

import Property from './components/Property'

import heroBG from '../../../assets/backgrounds/hero.png'
import line from '../../../assets/icons/line.svg'
import leaf from '../../../assets/icons/leaf.svg'
import card from '../../../assets/icons/card.svg'

import './style.css'

const Header = () => {
  return (
    <header className='hero'>
      <div className='background'>
        <div>
          <img src={heroBG} alt='' />
        </div>
        <div>
          <img src={heroBG} alt='' />
        </div>
        <div>
          <img src={heroBG} alt='' />
        </div>
      </div>
      <div className='main-container hero-content content'>
        <section className='titles'>
          <h1>An Ad Agency For a Modern World</h1>
          <p>Reach the largest blockchain audiences in the world</p>
        </section>
        <section className='properties'>
          <Property
            icon={line}
            iconName='group partnering'
            description='We’ve partnered with the largest cryptocurrency
exchanges in the world.'
            buttonLabel='Start Campaign'
          />
          <Property
            icon={leaf}
            iconName='mint drawing'
            description='Mint your ad campaign with our custom NFTAds Solutions.'
            buttonLabel='Minting Process'
          />
          <Property
            icon={card}
            iconName='card drawing'
            description='Pay in Crypto. it just wouldn’t make sense to only allow fiat paymenist.'
            buttonLabel='Payment Method'
          />
        </section>
      </div>
    </header>
  )
}

export default Header
