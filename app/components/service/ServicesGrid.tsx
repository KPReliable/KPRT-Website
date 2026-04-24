"use client";

const services = [
  {
    title: "Web Development",
    desc: "Modern and scalable web apps using MERN & Next.js",
  },
  {
    title: "UI/UX Design",
    desc: "Clean and user-friendly interfaces for better engagement",
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher and grow your organic traffic",
  },
  {
    title: "E-commerce",
    desc: "Custom Shopify & online store solutions",
  },
];

const ServicesGrid = () => {
  return (
    <section
      style={{ padding: "var(--section-py) 20px" }}
      className="bg-[var(--color-bg)]"
    >
      <div className="max-w-[var(--max-w)] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border hover:shadow-lg transition"
            style={{
              background: "var(--color-bg-alt)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              {service.title}
            </h3>
            <p style={{ color: "var(--color-text-muted)" }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;