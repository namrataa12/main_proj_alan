import React from "react";
import Slider from "react-slick";
import { ppost } from "../../../../dummyData";
import Heading from "../../../../components/heading/Heading";
import "./ppost.css";

const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <>
      <section className='popularPost'>
        <Heading title='Popular Posts' />
        <div className='content'>
          <Slider {...settings}>
            {ppost.map((val) => {
              return (
                <div className='items' key={val.id}>
                  <a href={val.link} target='_blank' rel='noopener noreferrer' className='post-link'>
                    <div className='box shadow'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div className='category category1'>
                          <span>{val.category}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        <div className='date'>
                          <i className='fas fa-calendar-days'></i>
                          <label>{val.date}</label>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Ppost;
