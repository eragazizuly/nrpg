import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import backgroundVideo from '../../assets/naruto-vs-sasuke.mp4'
import irina from '../../assets/irina.png'
import cards_data from '../../assets/cards/Cards_data'
import NewsCard from '../../components/NewsCard/NewsCard'


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
        <div className="second-block">
          <NewsCard 
            image={cards_data[cards_data.length - 1].image}
            date={cards_data[cards_data.length - 1].date}
            title={cards_data[cards_data.length - 1].title}
            hidden_text={cards_data[cards_data.length - 1].hidden_text}
          />
          <NewsCard 
            image={cards_data[cards_data.length - 2].image}
            date={cards_data[cards_data.length - 2].date}
            title={cards_data[cards_data.length - 2].title}
            hidden_text={cards_data[cards_data.length - 2].hidden_text}
          />
          <NewsCard 
            image={cards_data[cards_data.length - 3].image}
            date={cards_data[cards_data.length - 3].date}
            title={cards_data[cards_data.length - 3].title}
            hidden_text={cards_data[cards_data.length - 3].hidden_text}
          />
        </div>
    </div>
  )
}

export default Home