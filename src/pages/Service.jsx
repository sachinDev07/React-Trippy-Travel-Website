import React from 'react'
import Hero from '../components/servicePage/Hero'
import heroImg from '../components/assests/12.jpg'
const Service = () => {
  return (
    <>
        <Hero
          cName="service__hero"
          heroImg={heroImg}
          title="Service"
         />
    </>
  )
}

export default Service
