import React from 'react'
import './trip.scss'
// import img1 from '../../assests/5.jpg'
// import img2 from '../../assests/6.jpg'
// import img3 from '../../assests/8.jpg'
import {data} from './tripData'

const Trip = () => {
  return (
    <>
     <div className="trip">
        <h1>{data.title}</h1>
        <p>
            {data.description}
        </p>
        <div className="box">
            {
                data.details.map((d) => (
                    <div className="card">
                <div className="card-img">
                    <img src={d.img} alt="img" />
                </div>
                <div className="info">
                    <h4>{d.subTitle}</h4>
                    <p>
                        {d.text}
                    </p>
                </div>
            </div>
                ))
            }
            
{/* 
            <div className="card">
                <div className="card-img">
                    <img src={img2} alt="img" />
                </div>
                <div className="info">
                    <h4>Trip in Malaysia</h4>
                    <p>
                    Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences
                    </p>
                </div>
            </div> */}
            {/* <div className="card">
                <div className="card-img">
                    <img src={img3} alt="img" />
                </div>
                <div className="info">
                    <h4>Trip in France</h4>
                    <p>
                    France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.
                    </p>
                </div>
            </div> */}
        </div>
     </div> 
    </>
  )
}

export default Trip
