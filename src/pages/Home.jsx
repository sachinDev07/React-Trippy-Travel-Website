import React from 'react'
import Destination from '../components/homePage/destination/Destination'
import Hero from '../components/homePage/hero/Hero'
 

const Home = () => {
  return (
    <>
       <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destinations"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
       />

       <Destination />
    </>
  )
}

export default Home
