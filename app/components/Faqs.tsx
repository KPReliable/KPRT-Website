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
    <section className="faq__container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="faq__wrapper w-full">

        {/* 
          Responsive Enhancements on Header:
          - Uses flex-col by default (mobile first) to stack heading and CTA nicely.
          - Switches to flex-row on screens larger than mobile (sm:) to keep them side-by-side.
          - Items are aligned to the bottom (items-end) so the button sits cleanly beside the text baseline.
        */}
        <div className="faq__header flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-8 md:mb-12">

          {/* HEADING CONTROLLER */}
          <div className="text-left max-w-2xl">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="faq__subtitle mt-2 text-sm sm:text-base text-gray-500">
              Find answers to common questions about our services, support, and processes
            </p>
          </div>

          {/* SEE MORE — RIGHT ALIGNED / WRAPS NATURALLY BELOW ON MOBILE */}
          {faqData.length > PREVIEW_COUNT && (
            <div className="flex justify-start sm:justify-end shrink-0">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:py-2 text-xs font-semibold text-[#284c87] border border-[#284c87] hover:bg-[#284c87] hover:text-white transition-colors duration-200"
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

        {/* FAQ Items wrapper — with a responsive max-width to look clean on huge desktop viewports */}
        <div className="faq__items-wrapper max-w-4xl mx-auto space-y-4">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              className={`faq__item ${activeIndex === index ? 'faq__item--active' : ''}`}
            >
              <button
                className="faq__question-btn w-full flex justify-between items-center text-left py-4 px-5 text-sm sm:text-base font-medium"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="faq__question-text pr-4">{item.question}</span>
                <span className={`faq__toggle-icon shrink-0 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              {activeIndex === index && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="faq__answer transition-all duration-300 ease-in-out"
                  role="region"
                >
                  <div className="faq__answer-content px-5 pb-5 pt-1">
                    <p className="faq__answer-text text-sm sm:text-[15px] leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
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