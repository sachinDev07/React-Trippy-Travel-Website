import React from 'react'
import Hero from '../components/contactPage/Hero'
import heroImg from '../components/assests/2.jpg'
const Contact = () => {
  return (
    <>
        <Hero
          cName="contact__hero"
          heroImg={heroImg}
          title="Contact"
         />
    </>
  )
}

export default Contact
