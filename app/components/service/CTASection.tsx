"use client";

const CTASection = () => {
  return (
    <section
      style={{
        padding: "var(--section-py) 20px",
        background: "var(--color-primary)",
        color: "white",
      }}
    >
      <div className="max-w-[var(--max-w)] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="mb-6 text-lg">
          Let’s build something amazing together.
        </p>
        <button
          className="px-6 py-3 rounded-lg font-medium transition"
          style={{
            background: "var(--color-secondary)",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTASection;