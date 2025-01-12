import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import backgroundVideo from '../../assets/naruto-vs-sasuke.mp4'
import irina from '../../assets/irina.png'

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
                <div className='play-free2'>
                  <img src={irina} alt="" className='irina'/>
                  <div className='play-free2-text'>
                  <h2>ИГРАТЬ БЕСПЛАТНО</h2>
                  <p>СКАЧАТЬ В IRINABOT.RU</p> 
                  </div> 
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Home