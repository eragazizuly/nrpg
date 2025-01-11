import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import backgroundVideo from '../../assets/naruto-vs-sasuke.mp4'

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
                <h1>«Современный многопользовательский шедевр»</h1> 
            </div>
        </div>
    </div>
  )
}

export default Home