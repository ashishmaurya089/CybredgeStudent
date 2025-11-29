import { BrowserRouter as Router , Routes , Route, Navigate } from 'react-router-dom';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar  from './Component/Navbar';
import Swiperslide from './Component/Swiperslide';
import ScrollToTop from './Component/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from './Component/About';
import Services from './Component/Services';
// import Portfolio from './Component/Portfolio';
// import Team from './Component/Team';
// import Blog from './Component/Blog';
import Contact from './Component/Contact';  
import PrivacyPolicy from './Component/PrivacyPolicy';
import Terms from './Component/Terms&condition';
import Support from './Component/Support';
import FAQ from './Component/FAQ';
// import Watermark from '../src/assets/Gemini_Generated_Image_k4vff5k4vff5k4vf.png'
import Testimonial from "./Aarti/src/Presentoproject/testimonial";
import Pricing from './Aarti/src/Presentoproject/pricing';
import Ques from './Aarti/src/Presentoproject/question'
import Team2 from './Anjali/src/Team/Team';
// import Contact2 from './Anjali/src/Contact/Contact';
// import About2  from './Anjali/src/About/About';
// import Home2 from './Anjali/src/Home/Home';
import BlogG from './Blog';
import BlogD from './Blog_details'
import PortfolioV from './Vishal/src/Portfolio/Portfolio'
import All from './Vishal/src/Portfolio/Navigation/All';
import Application from './Vishal/src/Portfolio/Navigation/Application';
import Books from './Vishal/src/Portfolio/Navigation/Book';
import Product from './Vishal/src/Portfolio/Navigation/Product';
import Branding from './Vishal/src/Portfolio/Navigation/Branding';
import ServiceP from './Priya/src/Service'
import Sv from './Priya/src/Sv';
import State from './Priya/src/State';
import Tabs from './Priya/src/Tab'

function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,      
    once: true,          
    easing: "ease-out",  
  });
}, []);


  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
    
{/* Global Watermark Background 
      <img
        src={Watermark}
        alt="watermark"
        className="
          fixed inset-0 m-auto 
          opacity-50 
          w-100 h-100
          -z-100
          pointer-events-none 
          select-none
        "/>*/}
       <Routes>
{/*home page*/}

 <Route path='/' element={
  <>
      <Home/>
      <Swiperslide />
      <Testimonial/>
      <Pricing/>
      <Team2 />
      <PortfolioV/>
      <BlogG/>
       <Sv/>
      <State></State>
      <Tabs/>
      <ServiceP />
      {/*
      <Home2 />
       <About2 />
      <Contact2/>
      */}
      
      <Contact />
      <Ques/>
      </>
  } />

  {/*pages*/}
  <Route path='/about' element={<About/>} />
  <Route path='/services' element={<ServiceP/>} />
  <Route path='/portfolio' element={<PortfolioV/>} />
  <Route path='/team' element={<Team2/>} />
  {/* <Route path='/blog' element={<BlogG/>} /> */}
  <Route path='/contact' element={<Contact/>} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/support" element={<Support />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/testimonial" element={<Testimonial />} />
  <Route path="/pricing" element={<Pricing/>} />
  {/* <Route path='/Blog_details' element={<Blogd/>}></Route> */}
  <Route path='*' element={<Navigate to="/"/>} />
{/* <Route path='/' element={<Blog/>}></Route> */}

{/*Gautam */}
 <Route path='/blog' element={<BlogG/>}></Route>
<Route path='/Blog_detail' element={<BlogD/>}></Route>

{/* Vishal */}

 <Route path="/" element={<All />} />
<Route path="/application" element={<Application />} />
<Route path="/product" element={<Product />} />
<Route path="/branding" element={<Branding />} />
<Route path="/books" element={<Books />} />

     </Routes>
      <Footer/>
      
    
    </Router>
  );
}

export default App;
