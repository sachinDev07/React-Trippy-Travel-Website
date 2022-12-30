import React from 'react'
import './hero.scss'

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} />
        <div className="hero__text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>{props.buttonText}</a>
        </div>
      </div>
    </>
  )
}

export default Hero
