import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import backgroundVideo from '../../assets/Naruto-and-Sasuke.mp4'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="first-block">
        <video className="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="play">
                <h1>«Современный <br />многопользовательский <br />шедевр»</h1>
                <p>MAMMONTERA</p>
                <hr /> 
            </div>
        </div>
    </div>
  )
}

export default Home