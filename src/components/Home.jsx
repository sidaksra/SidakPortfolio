import React from 'react'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Education from './Education'
import Contactme from './Contactme'

const Home = () => {
  return (
    <main id="home">
        <Aboutme />
        <hr />
        <Education/>
        <hr />
        <Skills/>
        <hr />
        <Contactme />
    </main>
  )
}

export default Home
