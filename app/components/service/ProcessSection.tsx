"use client";

const steps = [
  "Requirement Analysis",
  "Planning & Strategy",
  "Development",
  "Testing & Launch",
];

const ProcessSection = () => {
  return (
    <section
      style={{ padding: "var(--section-py) 20px" }}
      className="bg-white"
    >
      <div className="max-w-[var(--max-w)] mx-auto text-center">
        <h2
          className="text-3xl font-bold mb-10"
          style={{ color: "var(--color-primary)" }}
        >
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index}>
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4"
                style={{
                  background: "var(--color-secondary)",
                  color: "white",
                }}
              >
                {index + 1}
              </div>
              <p style={{ color: "var(--color-text)" }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;