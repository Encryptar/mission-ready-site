import React from 'react'
import ListImage from '../ListImage/ListImage'

import invidiaGemini from "../../pictures/invidiaGemini.jpg"
import TeinFlexZCoilovers from "../../pictures/TeinFlexZCoilovers.jpg"
import xt206r from "../../pictures/xt206r.jpg"

import "./ImageList.css"

const ImageList = () => {
  return (
    <div className='imageList'>
        <ListImage Title="Invidia Exhaust" Description="Make it sound like a dream." Image={invidiaGemini}/>
        <ListImage Title="Tein Coilovers" Description="Never compromise on ride quality." Image={TeinFlexZCoilovers}/>
        <ListImage Title="Cosmis Wheels" Description="Style and performance." Image={xt206r}/>
    </div>
  )
}

export default ImageList