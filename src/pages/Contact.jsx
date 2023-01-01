import React from 'react'
import Hero from '../components/contactPage/Hero'
import heroImg from '../components/assests/2.jpg'
import ContactFrom from '../components/contactPage/ContactFrom'
const Contact = () => {
  return (
    <>
        <Hero
          cName="contact__hero"
          heroImg={heroImg}
          title="Contact"
         />

         <ContactFrom/>
    </>
  )
}

export default Contact
