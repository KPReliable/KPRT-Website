'use client'
import React, { useState } from 'react';
import '@/app/styles/faq.css'

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
  {
    id: 1,
    question: "What services does KP Reliable offer?",
    answer:
      "We provide Third-Party Inspection (TPI), Quality Audits, Sorting & Containment, Supplier Development, and Project Quality Support to ensure your products meet global quality standards.",
  },
  {
    id: 2,
    question: "Which industries do you serve?",
    answer:
      "We mainly support the Automotive, Manufacturing, Engineering, and Industrial sectors, helping businesses maintain quality across the supply chain.",
  },
  {
    id: 3,
    question: "What is Third-Party Inspection (TPI) and why is it important?",
    answer:
      "TPI is an independent quality verification process that ensures products meet customer specifications and international standards before dispatch—reducing risks, rejections, and customer complaints.",
  },
  {
    id: 4,
    question: "How quickly can you deploy inspection teams?",
    answer:
      "Our teams are trained for rapid deployment, and in most cases we can mobilize within 24 hours based on project location and urgency.",
  },
  {
    id: 5,
    question: "Do you provide 24/7 support for emergency sorting or containment?",
    answer:
      "Yes! We specialize in urgent containment and sorting activities, offering round-the-clock support to prevent production stoppages and customer line disruptions.",
  },
  {
    id: 6,
    question: "How do you ensure the quality and reliability of your inspectors?",
    answer:
      "All inspectors undergo structured training, certification, and periodic skill assessments to ensure consistent, professional, and reliable inspection services.",
  },
  {
    id: 7,
    question: "Can you support supplier development and process improvement?",
    answer:
      "Absolutely. We help suppliers identify gaps, implement improvements, and meet OEM/customer requirements, strengthening the overall supply chain quality.",
  },
  {
    id: 8,
    question: "How can we start working with KP Reliable?",
    answer:
      "Simply contact us through the website contact form, email, or phone. Our team will understand your requirement and provide a customized quality solution tailored to your project.",
  },
  {
    id: 9,
    question: "What quality and automotive standards do you support?",
    answer:
      "We follow globally recognized standards including ISO 9001 (Quality Management), IATF 16949 (Automotive Quality), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety), and ISO 17020 (Inspection Body Guidelines) to ensure consistent, safe, and reliable inspection services.",
  },
];

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