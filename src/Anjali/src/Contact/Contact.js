

import "./Contact.css";

import React, { useState } from 'react';


function Contact() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function nameHandler(e) {
    setName(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    alert(`Form Submitted Successfully!\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);



    console.log({
      name,
      email,
      subject,
      message,
    });

  };





  return (
    <>
      <section className="contact">
        <h1><center>CONTACT</center></h1>
        <div className="line"></div>
        <p className="content"> Let’s Create Something Meaningful<br /><br />
          <b></b> Ready to evolve your brand?<br /><br />
          Let’s start the conversation.<br /><br />

          Get In Touch Your brand deserves to be recognized, respected, and remembered.<br />
          Whether you are a visionary leader, a progressive business, or an emerging brand,<br />
          we are here to help you express your identity with clarity and confidence.<br /><br />



          We don’t just want to build a website for you. We want to build a digital presence that you feel proud of.<br /><br />

          <b> Contact Information</b><br /><br />

          Address:<br />

          Phone:<br />

          Email:<br />

          Website:<br /><br />

          Start Your Journey Let’s create something meaningful, modern, and unforgettable.</p>

        <div className="contact-container">



          <div className="contact-content">

            <div className="left-info">

              <div className="info-box">
                <div className="icon-circle">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h3 className="h3">Address</h3>
                <p className="left">A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="map-box">
                <iframe title="Google Map"
                  allowfullscreen src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3024.8953186462495!2d-73.99143122467007!3d40.69830307139577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA108%20Adam%20Street%2C%20New%20York%2C%20NY%20535022!5e0!3m2!1sen!2sin!4v1763623577797!5m2!1sen!2sin">

                </iframe>
              </div>

              <div className="left-info2">
                <div className="info-box1">
                  <div className="icon-circle">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <h3 className="h3">Call Us</h3>
                  <p className="left">+1 5589 55488 55</p>
                </div>

                <div className="info-box2">
                  <div className="icon-circle">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <h3 className="h3">Email Us</h3>
                  <p className="left">info@example.com</p>
                </div>
              </div>
            </div>



            <div className="right-form">
              <form>
                <div className="form-row">
                  <input type="text" placeholder="Your Name" value={ name } onChange={ nameHandler } required />
                  <input type="email" placeholder="Your Email" value={ email }
                    onChange={ (e) => setEmail(e.target.value) } required />
                </div>

                <input type="text" className="full-input" placeholder="Subject" value={ subject } onChange={ (e) => setSubject(e.target.value) } required />

                <textarea rows="6" placeholder="Message" value={ message } onChange={ (e) => setMessage(e.target.value) } required></textarea>

                <button className="send-btn" onClick={ handleSubmit } type="Submit">Send Message</button>
              </form>
            </div>

          </div>
        </div>





      </section >
    </>
  );
};

export default Contact;





