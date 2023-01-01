import React from 'react'
import AboutUs from '../components/aboutPage/AboutUs'
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

         <AboutUs/>
    </>
  )
}

export default About
