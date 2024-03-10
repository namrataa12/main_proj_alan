import React from "react"
import { tpost } from "../../../../dummyData"
import Heading from "../../../../components/heading/Heading"
import "./tpost.css"

const Tpost = () => {
  const handlePostClick = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <>
      <section className='tpost'>
        <Heading title='Tiktok post' />
        {tpost.map((val) => {
          return (
            <div className='box flexSB' key={val.id}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                {/* Render title as a clickable link */}
                <h1 className='title' onClick={() => handlePostClick(val.link)}>
                  {val.title.slice(0, 35)}...
                </h1>
                <span>a year ago</span>
              </div>
            </div>
          )
        })}
      </section>
    </>
  );
}

export default Tpost;