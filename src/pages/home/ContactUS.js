// Contact.js

import React from "react";
import { useState } from 'react';
import emailjs from "emailjs-com";
import { Card, CardContent, Typography, Button, TextField } from '@material-ui/core';
import './Contact.css';
import { Home_Navbar } from '../../components/Navbar';

const conSubTitle = "Get in touch with Contact us";
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
    <div className="cantact_us_full">
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
