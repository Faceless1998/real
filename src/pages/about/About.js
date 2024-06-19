import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import "./about.css";
import faqs from "./faq.json";

export const About = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    setFaqData(faqs);
  }, []);

  const handleClick = (index) => {
    setFaqData((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, show: !faq.show } : faq
      )
    );
  };

  return (
    <div>
      <h1>Facts & Questions</h1>
      <h3>
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </h3>
      <div className="faq">
        {faqData.map((faq, index) => (
          <div>
            <div
              className="element"
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="faq-question">
                <div>{faq.question}</div>
                <div> {faq.show ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </div>

            {faq.show && <div className="faq-answer">
              {faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};
