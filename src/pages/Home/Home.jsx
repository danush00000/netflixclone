import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import Titlecard from '../../components/Titlecards/Titlecard'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt=""  className='caption-img'/>
          <p>Discovery his ties to a secret ancient order , a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
           <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
           </div>
           <Titlecard/>
        </div>
      </div>
      <div className="more-cards">
      <Titlecard title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecard title={"Only on Netflix"} category={"popular"}/>
      <Titlecard title={"Upcoming"} category={"upcoming"}/>
      <Titlecard title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home