import React from 'react'
import './NewsCard.css'

const NewsCard = ({image, date , title, hidden_text}) => {
  return (
    <div className='newscard' style={{backgroundImage: `url(${image})`}}>
        <p className='newscard-date' style={{textTransform: 'uppercase'}}>{date}</p>
        <h2>{title}</h2>
        <p className='hidden'>{hidden_text}</p>
    </div>
  )
}

export default NewsCard