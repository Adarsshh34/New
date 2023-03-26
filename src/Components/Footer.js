import React from 'react'
import { FaHome } from "react-icons/fa";
export default function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='upper-container'>
                <div className='row'>
                    <div className=''></div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                       <h2>Quick Links</h2> 
                       <ul>
                        <li> <FaHome/> Home </li>
                        <li><a href="">About</a> </li>
                        <li> <a href="">Services</a> </li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">privacy policy</a></li>
                       </ul>
                    </div>
                    <div className='footer-col'>
                        <h2>Services</h2>
                        <ul>
                            <li>Translation</li>
                            <li>Transcription</li>
                            <li>Localization</li>
                            <li>Dubbing</li>
                            <li>Subtitling</li>
                            <li>Voice Over</li>
                            <li>Interpretation (VRI)</li>
                            <li>Content Writing</li>
                            <li>Video creation</li>
                            <li>AI Dubbing</li>
                        </ul>
                    </div>
                    
                    <div className='footer-col'>
                    <h2>contact details</h2>
                        <ul>
                            <p>316, Gemstar Commercial</p>
                            <p>Complex,</p>
                            <p>Ramchandra Lane Extn,</p>
                            <p>Kanch Pada</p>
                            <p>Malad West, Mumbai 400064</p>
                            <p>Maharashtra, India</p>

                            <p>+91-9136109881</p>
                            <p>amitt@parikhinfosoltions.com</p>
                            <p>amitt.parikh</p>
                        </ul>
                    </div>
                    <div className='footer-col'>
                    <h2>Map</h2>
                        <ul>
                            <li>Map</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
