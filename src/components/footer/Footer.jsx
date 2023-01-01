import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="f_header">
            <div className="brandName">
                <h1>Trippy</h1>
                <p>
                Choose your favourite destination.
                </p>
            </div>
            <div className="socialMedia">
                <a href=""><i class="fa-brands fa-square-facebook"></i></a>                
                <a href=""><i class="fa-brands fa-square-instagram"></i></a>
                <a href=""><i class="fa-brands fa-square-behance"></i></a>
                <a href=""><i class="fa-brands fa-square-twitter"></i></a>
           </div>
        </div>
        <div className="other__info">
            <div className="box">
                <strong>Project</strong>
                <ul>
                    <li><a href='#hero' >Changelog</a> </li>
                    <li><a href='#hero' >Status</a> </li>
                    <li><a href='#hero' >License</a> </li>
                    <li><a href='#hero' >All Versions</a> </li>
                </ul>
                
            </div>
            <div className="box">
                <strong>Community</strong>
                <ul>
                    <li><a href='#hero' >Issues</a></li>
                    <li><a href='#hero' >Project</a></li>
                    <li><a href='#hero' >Twitter</a></li>
                    <li><a href='#hero' >GitHub</a></li>
                </ul>
            </div>
            <div className="box">
                <strong>Help</strong>
                <ul>
                    <li><a href='#hero' >Support</a></li>
                    <li><a href='#hero' >Troubleshooting</a></li>
                    <li><a href='#hero' >Contact Us</a></li>
                </ul>
            </div>
            <div className="box">
                <strong>Others</strong>
                <ul>
                    <li><a href='#hero' >Terms of Service</a></li>
                    <li><a href='#hero' >Privacy Policy</a></li>
                    <li><a href='#hero' >License</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
