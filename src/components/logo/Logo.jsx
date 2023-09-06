import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        CryptoF<span className='unique'>i</span>x
      </Link>
    </div>
  )
}

export default Logo
