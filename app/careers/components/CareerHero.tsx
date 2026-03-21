"use client";

interface CareerHeroProps {
  onViewJobs: () => void;
}

export default function CareerHero({ onViewJobs }: CareerHeroProps) {
  return (
    <section className="career-hero">
      <div className="career-hero__overlay" />
      <div className="career-hero__grid" />
      <div className="career-hero__content">
        <span className="career-hero__badge">🚀 We&apos;re Hiring Across India</span>
        <h1 className="career-hero__heading">
          Build a Career That <br />
          <span className="career-hero__heading--accent">Shapes Quality</span> Standards
        </h1>
        <p className="career-hero__sub">
          Join a team of quality professionals driving excellence across
          India&apos;s leading industries. Be part of a mission that matters —
          ensuring every product meets the highest standards.
        </p>
        <div className="career-hero__btns">
          <button className="career-hero__btn-primary" onClick={onViewJobs}>
            View Open Positions
            <span className="career-hero__arrow">→</span>
          </button>
          <button className="career-hero__btn-outline">Life at QIInspect</button>
        </div>
      </div>
    </section>
  );
}
