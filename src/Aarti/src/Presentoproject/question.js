import React, { useState } from "react";
import "./question.css";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "What is your approach/process?",
      answer: (
        <>
          <b> Discover: </b> Understand your brand, audience, challenges, and
          goals.
          <br />
          <b> Conceptualize: </b> Shape brand direction, tone, communication
          style, and digital strategy.
          <br />
          <b> Design: </b> Create intuitive, striking, and refined interfaces
          and experiences.
          <br />
          <b> Develop: </b> Build secure, scalable, stable solutions using
          modern technologies.
          <br />
          <b> Launch & Support: </b> Deploy, optimize, and support with
          continuous improvement.
        </>
      ),
    },

    {
      question: " What makes you different?",
      answer: (
        <>
          <b> Design with Depth: </b> Your digital presence should not look
          generic or copied. It should reflect your culture, your voice, and
          your values.
          <br />
          <b> Grow with Strategy: </b> Every feature, function, and design
          choice is guided by your business goals."
        </>
      ),
    },

    {
      question: "What is your design philosophy?",
      answer: (
        <>
          Most websites look similar because they follow repeat patterns. We
          don’t copy. We create. We blend minimalism with character, simplicity
          with sophistication, and function with emotion.
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="heading">
      <h2 className="title">Frequently Asked Questions</h2>
      <div className="underline"></div>
      <p className="subtitle">
        Here frequently asked question page of cybredge......
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <button className="question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </button>

            {activeIndex === index && (
              <div className="answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
