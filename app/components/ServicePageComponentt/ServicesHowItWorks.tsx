import { processSteps } from "@/app/data/servicesData";

export default function ServicesHowItWorks() {
  return (
    <section className="services-how">
      <div className="services-how__inner">
        {/* Section Header */}
        <div className="services-how__header">
          <span className="section-eyebrow">Our Process</span>
          <h2 className="section-title">
            How <span>KPRT</span> Delivers
          </h2>
          <p className="section-subtitle">
            A transparent, 4-step process from the moment you raise a request
            to the delivery of your actionable inspection report.
          </p>
        </div>

        {/* Steps */}
        <div className="services-how__steps">
          {processSteps.map((step, index) => (
            <div key={step.number} className="services-how__step">
              {/* Number Circle */}
              <div className="services-how__step-num">
                {step.number}
                <div className="services-how__step-icon">
                  <i className={`fas ${step.icon}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="services-how__step-title">{step.title}</h3>
              <p className="services-how__step-desc">{step.description}</p>

              {/* Connector line (hidden on last item) */}
              {index < processSteps.length - 1 && (
                <div className="services-how__connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
