import React from "react"
import "./footer.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />



const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
          <p>News flash: Group of cows spotted practicing synchronized mooing for upcoming talent show.😂</p>
          <p>NewsMag: An amazing news website theme that is easy to customize for your needs! 📰✨  Your Gateway to the Latest Headlines and Insights!</p>

            <i className='fa fa-envelope'></i>
            <span> patel.namrata@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +919167684593</span>
            <span></span>
          </div>
          <div className='box'>
            <h3>FASHION</h3>
            <div className='item'>
              <a href="https://edition.cnn.com/style/fashion"><img src='../images/hero/hero1.jpg' alt='' /></a>
              <p>Score big, dream bigger: The heartbeat of sports</p>
            </div>
            <div className='item'>
            <a href="https://sportstar.thehindu.com/basketball/"><img src='../images/hero/hero2.jpg' alt='' /></a>
              <p>Dribble, shoot, score: Basketball magic in motion!</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
            <a href="https://www.hindustantimes.com/cricket"><img src='../images/hero/hero3.jpg' alt='' /></a>
              <p>Cricket mania: Catch the frenzy, feel the passion</p>
            </div>
            <div className='item'>
            <a href="hhttps://www.cricbuzz.com/"><img src='../images/hero/hero4.jpg' alt='' /></a>
              <p>From Test matches to T20 thrills: Cricket's journey never ends</p>
            </div>
          </div>
          <div className='box'>
          <h3>HEALTH</h3>
            <div className='item'>
            <a href="https://health.economictimes.indiatimes.com/news"><img src='../images/hero/hero5.jpg' alt='' /></a>
              <p>Stay on track with fast health updates!</p>
            </div>
            <div className='item'>
            <a href="https://indianexpress.com/about/yoga/"><img src='../images/hero/hero6.jpg' alt='' /></a>
              <p>Yoga: Where mind, body, and soul unite in harmony!</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made by <i className='fa fa-heart'></i> Namrata
          </p>
        </div>
      </div>
    </>
  )
}
export default Footer
