import React from 'react'
import './destination.scss'

const DestinationData = (props) => {
  return (
    <div className="container">
        <div className={props.cName}>
            <div className="left">
                <h3>{props.heading}</h3>
                <p>
                {props.text}
                </p>
            </div>
            <div className="right">
                <img src={props.img1} alt="tourImg" />
                <img src={props.img2} alt="tourImg" />
            </div>
        </div>
        {/* <div className="box">
            <div className="right">
                <img src={img1} />
                <img src={img2} alt="tourImg" />
            </div>
            <div className="left">
                <h3>Mt. Daguldul, Batangas</h3>
                <p>
                If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim. 
                </p>
            </div>
        </div> */}
    </div>
  )
}

export default DestinationData
