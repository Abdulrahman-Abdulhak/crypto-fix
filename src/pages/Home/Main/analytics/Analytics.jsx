import React from 'react'

import chart from '../../../../assets/models/Line chart.svg'
import './style.css'

const Analytics = () => {
  return (
    <section className='analytics main-container'>
      <div className='description'>
        <hgroup>
          <h3>Suprior Analystics</h3>
          <h2>Every state you need to remain successful</h2>
        </hgroup>
        <p>
          We’ve built our system from the ground up, by both investors and
          marketing experts alike. From real-time analytics, to ground breaking
          goal conversion statistics - we’ve got you covered.
        </p>
      </div>
      <div className='graph'>
        <img src={chart} alt='analytics chart' />
      </div>
    </section>
  )
}

export default Analytics
