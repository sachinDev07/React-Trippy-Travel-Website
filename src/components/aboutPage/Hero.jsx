import React from 'react'
import './hero.scss'
const Hero = (props) => {
  return (
    <>
        <div className={props.cName}>
            <img src={props.heroImg} />
            <div className="hero__text">
            <h1>{props.title}</h1>
            </div>
        </div>
    </>
  )
}

export default Hero
