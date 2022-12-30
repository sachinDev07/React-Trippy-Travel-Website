import React from 'react'
import Hero from '../components/aboutPage/Hero'
import heroImg from '../components/assests/night.jpg'

const About = () => {
  return (
    <>
        <Hero
          cName="about__hero"
          heroImg={heroImg}
          title="About"
         />
    </>
  )
}

export default About
