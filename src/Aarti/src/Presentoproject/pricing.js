import React from "react";
import "./Example.css";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">PRICING</h2>
      <div className="underline"></div>
      <h2 className="pricing-subtitle">Cybregde Pricing page...</h2>

      <div className="pricing-container">
        <div className="pricing-box">
          <h3>What We Deliver (Services Included):</h3>

          <ul>
            <li>
              <FaCheck className="check" /> Website UI & Corporate Web Identity
              Design.
            </li>
            <li>
              <FaCheck className="check" /> Landing Page & Sales Funnel Design.
            </li>
            <li>
              <FaCheck className="check" />
              Dashboard & Web Application Interface Design.
            </li>
            <li>
              <FaCheck className="check" />
              Mobile App UI/UX for iOS & Android.
            </li>
            <li>
              <FaCheck className="check" />
              Interaction Design, Motion Design & Micro-Animations.
            </li>
            <li>
              <FaCheck className="check" />
              User Journey Mapping & Information Architecture.
            </li>
            <li>
              <FaCheck className="check" />
              Conversion-Focused Layout Strategy.
            </li>

            <li>
              <FaCheck className="check" />
              Visual & Communication Style Guides
            </li>
          </ul>

          <button className="btn-buy">Buy Now</button>
        </div>

        <div className="pricing-box featured">
          <h3>Business Plan</h3>
          <h4 className="price-text">
            <span className="price-currency">$</span>
            <span className="price-amount">29</span>
            <span className="price-month">/month</span>
          </h4>

          <ul>
            <li>
              <FaCheck className="check" /> Quam adipiscing vitae proin
            </li>
            <li>
              <FaCheck className="check" /> Nec feugiat nisl pretium
            </li>
            <li>
              <FaCheck className="check" /> Nulla at volutpat diam uteera
            </li>
            <li>
              <FaCheck className="check" /> Pharetra massa massa ultricies
            </li>
            <li>
              <FaCheck className="check" /> Massa ultricies mi quis hendrerit
            </li>
          </ul>

          <button className="btn-buy featured-btn">Buy Now</button>
        </div>

        <div className="pricing-box">
          <h3>Why Invest with Cybredge?</h3>

          <ul>
            <li>
              <FaCheck className="check" /> We do not just create systems that
              work. We build systems that perform, sustain, and grow with your
              business.
            </li>
            <li>
              <FaCheck className="check" /> Secure architecture.
            </li>
            <li>
              <FaCheck className="check" /> Optimized code.
            </li>
            <li>
              <FaCheck className="check" /> Scalable structure.
            </li>
            <li>
              <FaCheck className="check" /> Stable deployment Your platform is
              built to last, not break.
            </li>
          </ul>

          <button className="btn-buy">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
