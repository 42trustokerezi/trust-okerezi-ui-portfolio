import React from 'react'
import './banner.css'

const BannerCard = ({img, type, title, desc}) => {
  return (
    <div className="banner-container">
        <div className="banner">
            <img src={img}/>
        </div>
        <div className="banner-info">
            <p className="project-type">{type}</p>
            <div className='more-info'>
                <h1 className="project-title">{title}</h1>
                <p className="project-description">{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default BannerCard