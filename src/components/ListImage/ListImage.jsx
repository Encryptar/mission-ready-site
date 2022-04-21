import React from 'react'

import "./ListImage.css"
const ListImage = (props) => {
  return (
    <div className='listImage'>
        <div className='listImageContainer'>
            <img className="listImageImage" src={props.Image} alt="" style={{width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center'}}/>
        </div>
        <div className='listImageDescription'>
            <h2>{props.Title}</h2>
            <h3>{props.Description}</h3>
        </div>
    </div>
  )
}

export default ListImage