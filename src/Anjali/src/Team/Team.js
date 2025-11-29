import React from "react";
import "./Team.css";



function Team() {

  return (
    <>

      <section className="clip">
        <h1 className="title"><center>TEAM</center></h1>
        <div className="line"></div>
        <p className="para"><b>The Minds Behind the Vision</b><br /><br />

         United by Passion. Driven by Purpose.<br /><br />

          <h1>Who We Are At Cybredge?</h1>
          
          <br></br><br></br>
          
          We believe that great digital experiences are built by people who care about the details.<br />
          Our team brings together creativity, logic, and innovation to craft solutions that feel alive, meaningful, and intelligent.<br /><br />

          We are not just designers and developers. We are partners in your growth. We do not just execute tasks; we collaborate, guide, and elevate.<br /><br />

          <b>Our Culture</b><br /><br />


          We Listen Deeply: To understand what makes your brand unique.<br /><br />


          We Challenge Assumptions: To find better, stronger solutions.<br /><br />



          We Deliver Excellence: Because craftsmanship matters to us. </p>


        <div className="main-box">
          <div className="second-box">
            <div className="member-img">
              <img src="https://cybredge-private-limited.netlify.app/assets/img/team/team-1.jpg" className="cardimage" alt="img" />
             
            </div>
            <div className="name">
              <p className="cardheader">Walter White</p>
              <p className="cardpara">Chief Executive Officer</p>
            </div>
          </div>

          <div className="second-box">
            <div className="member-img">
              <img src="https://cybredge-private-limited.netlify.app/assets/img/team/team-2.jpg" className="cardimage" alt="img" />
              
            </div>
            <div className="name">
              <p className="cardheader">Sarah Jhonson</p>
              <p className="cardpara">Product Manager</p>
            </div>
          </div>

          <div className="second-box">
            <div className="member-img">
              <img src="https://cybredge-private-limited.netlify.app/assets/img/team/team-3.jpg" className="cardimage" alt="img" />
              
            </div>
            <div className="name">
              <p className="cardheader">William Anderson</p>
              <p className="cardpara">CTO</p>
            </div>
          </div>

          <div className="second-box">
            <div className="member-img">
              <img src="https://cybredge-private-limited.netlify.app/assets/img/team/team-4.jpg" className="cardimage" alt="img" />
             
            </div>
            <div className="name">
              <p className="cardheader">Amanda Jepson</p>
              <p className="cardpara">Accountant</p>
            </div>
          </div>
        </div>


      </section >
    </>
  );
};


export default Team;

