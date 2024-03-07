import React from 'react';
import { Home_Navbar } from '../../components/Navbar';


const AboutUs = () => {
  
  const additionalCards = [
    {
      imgUrl: '/images/news.png',
      title: "Our Mission",
      description: "To provide reliable and unbiased news coverage to our readers, empowering them to make informed decisions.",
    },
    {
      imgUrl: '/images/news.png',
      title: "Our Team",
      description: "Meet our dedicated team of journalists, editors, and contributors who work tirelessly to deliver quality news content.",
    },
    {
      imgUrl: '/images/news.png',
      title: "Join Us",
      description: "Interested in joining our team? Check out our careers page for current job openings and opportunities.",
    }
  ];

  return (
    
    <div className="root-container">
        
        <style>
        {`
          .root-container {
            min-height: 100vh;
            background-image: url('/images/paper.png'); /* Background image */
            background-size: cover; /* Cover the entire container */
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Add position relative */
          }

          .about-us-container {
            max-width: 800px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
            border-radius: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            text-align: left;
            font-family: Arial, sans-serif;
            color: #333;
            padding: 40px;
            position: relative; /* Add position relative */
            z-index: 1; /* Ensure the AboutUs content appears above the navbar */
            
            margin-top: 80px;
          }

          .about-us-title {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            margin-bottom: 30px;
          }

          .about-us-description {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .additional-card-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
          }

          .additional-card {
            width: calc(33.33% - 20px);
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            overflow: hidden;
          }

          .additional-card:hover {
            transform: translateY(-5px);
          }

          .additional-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .additional-card-title {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }

          .additional-card-description {
            font-size: 16px;
            color: #666;
          }
        `}
      </style>
      <Home_Navbar/>
      <div className="about-us-container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Welcome to our news website, where we strive to provide you with reliable and unbiased news coverage from around the world. Our mission is to empower you, our readers, with the information you need to make informed decisions.
        </p>
        <p className="about-us-description">
          Our team is made up of passionate journalists, editors, and contributors who work tirelessly to deliver quality news content. We are committed to upholding the highest standards of journalistic integrity and providing you with insightful reporting and analysis.
        </p>
        <div className="additional-card-container">
          {additionalCards.map((card, index) => (
            <div className="additional-card" key={index}>
              <img src={card.imgUrl} alt={card.title} />
              <h3 className="additional-card-title">{card.title}</h3>
              <p className="additional-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
