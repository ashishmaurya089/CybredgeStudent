
import "./Home.css";
import React, { useState } from 'react';

// import Nav from './Nav';

function Home() {

  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [service, setService] = useState('Web Design & Development');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };
  function nameHandler(e) {
    setName(e.target.value);
  }

  const phoneNumberHandler = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, '');
    setPhoneNum(onlyDigits);
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log({
      name,
      phoneNum,
      email,
      business,
      service,
      location,
      description,
    });


    alert(`Form Submitted Successfully!\nName: ${name}\nPhone: ${phoneNum}`);



  };
  return (
    <>
      {/* <Nav />  */ }
      <nav className="navbar">
        <div className="logo">
          <img src="https://astream.in/wp-content/uploads/2023/08/ASTREAM-LOGO.png" alt="Astream-logo" />
        </div>
        <div>
          <a href="*">Home</a>
          <a href="*">About Us</a>
          <a href="*">Services</a>
          <a href="*">Product</a>
          <a href="*">Contact Us</a>
        </div>
      </nav>
      <section className="first">
        <div className="left">
          <h1>
            Transform Your Online Presence With <br />
            <span>Professional Web Design Services</span>
          </h1>
          <div className="1">
            <img src="https://adeeljabbar.com/wp-content/uploads/2024/08/82.jpg" alt="images" />
          </div>
        </div>
        <div className="right">
          <form className="form" onSubmit={ submitForm }>
            <h1>Get Your Website in 48 Hour</h1>
            <input
              type="text"
              placeholder="Name"
              value={ name }
              onChange={ nameHandler }
              required
            />



            <div className="row">
              <select>
                <option>IN +91</option>
                <option>US +1</option>
                <option>GB +44</option>
                <option>INDO +62</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                value={ phoneNum }
                onChange={ phoneNumberHandler }
                maxLength={ 10 }
                pattern="[0-9]*"
                inputMode="numeric"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              required
            />

            <div className="row">
              <input
                type="text"
                placeholder="Which Business do you have?"
                value={ business }
                onChange={ (e) => setBusiness(e.target.value) }
                required
              />

              <select
                value={ service }
                onChange={ (e) => setService(e.target.value) }
              >
                <option>Web Design & Development</option>
                <option>App Development</option>
                <option>Marketing</option>
                <option>Branding</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="You are from?"
              value={ location }
              onChange={ (e) => setLocation(e.target.value) }
              required
            />

            <textarea
              rows="2"
              placeholder="Give a short description of what you want from us."
              value={ description }
              onChange={ (e) => setDescription(e.target.value) }
            ></textarea>

            <button type="submit">SEND</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;

//
//         </div>
//       </section>
//       <section className="second">
//         <div className="second1">
//         <div className="second3">
//         <p>You Think We Built Your Vision
//            <h1>We Mind Your Business !!</h1>
//           Are you desiring to achieve your digital dream with the best-combined services?
//            Astream is here for you, to provide all types of digital support regarding personal 
//            or professional as well as e-commercial website issues. Apart from this,
//             we deliver a wide range of services that meet your specific needs.
//             This article mentions your favorite hats at super low prices. 
//             Choose from same-day delivery, drive-up delivery or order pickup.</p>
//         </div>
//         <div className="second4">      
//           <div className="images">  
//           <div className="image1">
//             <img src="https://astream.in/wp-content/uploads/2023/08/webdesign-serice.png" alt="Website Design"
//              height="60%" width="100%"/>
//            <h3>Website Design & Development</h3>
//            <p>Fully compatible and user-friendly dynamic websites to perform the user’s requirements.
//             </p>
//           </div>
//           <div className="image2">
//             <img src="https://astream.in/wp-content/uploads/2023/08/pexels-syed-qaarif-andrabi-12495614.jpg" alt="Maintenance"
//              height="60%" width="100%"/>
//             <h3>Website Maintenance</h3>
//             <p>The top class of maintenance of websites to ensure the availability of 24/7.</p>
//           </div>
//           <div className="image3">
//             <img src="https://astream.in/wp-content/uploads/2023/08/webdesign-serice-1.png" alt="Development" 
//             height="60%" width="100%"/>
//             <h3>App Development</h3>
//             <p>Designing smooth-running applications with the latest features for every medium.</p>
//           </div>
//           </div>
//         </div>
//         </div>
//         <div className="second2">
//          <div className="second5">
//           <img src="https://astream.in/wp-content/uploads/2023/08/Copy-of-National-Technology-Day-Made-with-PosterMyWall-1-305x360-1.webp" alt="aws"/>
//          </div>
//          <div className="second6">
//          <h3>Request a Quote</h3>
//           <p>Get Your Personal Website / Business Website & E-commerce Website at<br/>
//              an Affordable Cost</p>
//              <button type="submit">ENQUIRE NOW</button>
//          </div>
//         </div>
//       </section> 
//     </>
//   );
// }

// export default Home;


