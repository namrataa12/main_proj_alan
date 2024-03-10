import React from "react"
import Slider from "react-slick"
import { lifestyle } from "../../../../dummyData"
import Heading from "../../../../components/heading/Heading"

import "../Ppost/ppost.css"
//copy ppost code
const Life = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='popularPost life'>
        <Heading title='Life Style' />
        <div className='content'>
          <Slider {...settings}>
            {lifestyle.map((val) => {
              return (
                <div className='items' key={val.id}>
                  {/* Wrap the post content with an anchor tag */}
                  <a href={val.link} target="_blank" rel="noopener noreferrer" className="post-link">
                    <div className='box shadow'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div class='category category1'>
                          <span>{val.category}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        <div className='date'>
                          <i class='fas fa-calendar-days'></i>
                          <label>{val.date}</label>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Life;