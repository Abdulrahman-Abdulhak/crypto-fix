import React from 'react'

import { Link, NavLink, useNavigate } from 'react-router-dom'

import Button from '../Button'
import Logo from '../logo/Logo'

import './style.css'

const Nav = () => {
  const navigate = useNavigate()

  return (
    <nav className='main-nav main-container'>
      <Logo />
      <ul className='menu'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/ad-type'>Ad type</NavLink>
        </li>
        <li>
          <NavLink to='/content'>Content</NavLink>
        </li>
      </ul>
      <ul className='auth'>
        <Link to='/'>Login</Link>
        <Button lable='Start Campaign' onClick={e => navigate('/')} />
      </ul>
    </nav>
  )
}

export default Nav
