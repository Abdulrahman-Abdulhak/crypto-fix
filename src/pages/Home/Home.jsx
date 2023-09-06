import React from 'react'

import Header from './Header/Header'
import Ready from './Ready/Ready'
import Main from './Main/Main'

const Home = () => {
  return (
    <>
      <Header />
      <section className='main-container'>
        <Ready />
      </section>
      <Main />
    </>
  )
}

export default Home
