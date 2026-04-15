'use client'
import React, { useState } from 'react';
import '@/app/styles/faq.css'
import { faqData } from '../data/faqData';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

 
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq__container">
      <div className="faq__wrapper">
        {/* Header */}
        <div className="faq__header">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__subtitle">
            Find answers to common questions about our services, support, and processes
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq__items-wrapper">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`faq__item ${activeIndex === index ? 'faq__item--active' : ''}`}
            >
              {/* Question Button */}
              <button
                className="faq__question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__toggle-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="faq__answer"
                  role="region"
                >
                  <div className="faq__answer-content">
                    <p className="faq__answer-text">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="faq__cta-section">
          <p className="faq__cta-text">Didn not find what you are looking for?</p>
          <a href="#contact" className="faq__cta-button">
            Get in Touch
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Faqs;