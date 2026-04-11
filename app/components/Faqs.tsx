'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import '@/app/styles/faq.css'
import { faqData } from '../data/faqData';

const PREVIEW_COUNT = 5;

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const previewItems = faqData.slice(0, PREVIEW_COUNT);

  return (
    <section className="faq__container">
      <div className="faq__wrapper">

        {/* Header — with See More top-right */}
      <div className="faq__header">

  {/* CENTERED HEADING */}
  <div className="text-center">
    <h2 className="section-title">Frequently Asked Questions</h2>
    <p className="faq__subtitle">
      Find answers to common questions about our services, support, and processes
    </p>
  </div>

  {/* SEE MORE — RIGHT ALIGNED BELOW */}
  {faqData.length > PREVIEW_COUNT && (
    <div className="flex justify-end mt-4">
      <Link
        href="/faq"
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#284c87] border border-[#284c87] hover:bg-[#284c87] hover:text-white transition-colors duration-200"
      >
        See All FAQs
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )}

</div>
        {/* FAQ Items — unchanged */}
        <div className="faq__items-wrapper">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              className={`faq__item ${activeIndex === index ? 'faq__item--active' : ''}`}
            >
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

      </div>
    </section>
  );
};

export default Faqs;