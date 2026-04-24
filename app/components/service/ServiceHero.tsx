"use client";

const ServiceHero = () => {
  return (
    <section
      className="w-full"
      style={{
        background: "var(--color-primary-light)",
        padding: "var(--section-py) 20px",
      }}
    >
      <div className="max-w-[var(--max-w)] mx-auto text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          Our Services
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          We provide modern digital solutions to help your business grow faster
          and smarter.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;