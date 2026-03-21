import { values } from "../data/careersData";

export default function WhyJoinUs() {
  return (
    <section className="why-join">
      <div className="careers-inner">
        <div className="careers-section-head">
          <span className="careers-section-tag">Why Join Us</span>
          <h2 className="careers-section-title">
            More Than a Job —<br />
            A Purpose-Driven Career
          </h2>
          <p className="careers-section-sub">
            We invest in people who believe quality isn&apos;t just a process —
            it&apos;s a mindset. Here&apos;s what you can expect.
          </p>
        </div>

        <div className="why-join__grid">
          {values.map((val, i) => (
            <div className="why-join__card" key={i}>
              <div className="why-join__icon">{val.icon}</div>
              <h3 className="why-join__card-title">{val.title}</h3>
              <p className="why-join__card-desc">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
