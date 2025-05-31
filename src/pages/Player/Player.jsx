import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'


const Player = () => {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src='{}'></iframe>
    </div>
  )
}

export default Player