import React from "react"
import { discover } from "../../../dummyData"
import Heading from "../../../components/heading/Heading"
import "./style.css"

const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Heading title='Discover' /> 
          <div className='content'>
            {discover.map((val) => {
              return (
                <a href={val.link} key={val.title} target="_blank" rel="noopener noreferrer">
                  {/* Wrap the image inside the anchor tag */}
                  <div className='box'>
                    <div className='img'>
                      <img src={val.cover} alt={val.title} />
                    </div>
                    <h1 className='title'>{val.title}</h1>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;