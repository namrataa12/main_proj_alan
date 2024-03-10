import React from "react";
import { useState } from 'react';
import emailjs from "emailjs-com";
import { Card, CardContent, Typography, Button, TextField } from '@material-ui/core';
import { Home_Navbar } from '../../components/Navbar';
import backgroundImage from '../../images/paper3.png'; // Import your image here

const conSubTitle = "Get in touch with us";
const btnText = "Send Message";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Use the emailjs.send() method to send the email
    emailjs.send(
      "service_qzzz6xi", 
      "template_p7ouoq6", 
      formData,
      "qhisfOVa1VIPlgp_U" // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Reset form data to empty values
        setFormData((prevData) => ({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        }));
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
        // Handle the error, show an error message, or redirect the user
      });
  };
  

  return (
    <div className="contact-us-full" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <style>
        {`
        /* Global styles */
        .container {
          position: relative; /* Add position relative */
          z-index: 0; /* Add z-index for the background */
          width: 100%;
          margin: 0 auto;
          padding: 0 15px;
        }
        .contact-section {
          margin-top: 100px;
          margin-bottom: 30px;
        }
        .contact-card {
          margin-top: 0; /* Remove top margin to make the card closer to the navbar */
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          background-color: rgba(255, 255, 255, 0.7); /* Set background color to transparent with opacity */
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .title {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }
        
        .subtitle {
          font-size: 18px;
          color: #777;
        }
        
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        input[type="text"],
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #000000; /* Set text color to dark black */
        }
        
        textarea {
          height: 150px;
        }
        
        .lab-btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .lab-btn:hover {
          background-color: #0056b3;
        }
        `}
      </style>
      <Home_Navbar />
      <div className="contact-section padding-tb">
        <div className="container">
          <Card className="contact-card">
            <CardContent>
              <div className="section-header text-center">
                <span className="subtitle">{conSubTitle}</span>
                <Typography variant="h5" component="h2" className="title"></Typography>
              </div>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <TextField type="text" name="from_name" label="Your Name *" onChange={handleInputChange} fullWidth />
                </div>
                <div className="form-group">
                  <TextField type="email" name="email" label="Your Email *" onChange={handleInputChange} fullWidth />
                </div>
                <div className="form-group">
                  <TextField type="text" name="number" label="Mobile Number *" onChange={handleInputChange} fullWidth />
                </div>
                <div className="form-group">
                  <TextField type="text" name="subject" label="Your Subject *" onChange={handleInputChange} fullWidth />
                </div>
                <div className="form-group w-100">
                  <TextField
                    rows={8}
                    type="text"
                    label="Your Message"
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                  />
                </div>
                <div className="form-group w-100 text-center">
                  <Button variant="contained" color="primary" type="submit">{btnText}</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
