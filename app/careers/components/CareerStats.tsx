import { stats } from "../data/careersData";

export default function CareerStats() {
  return (
    <div className="career-stats">
      {stats.map((stat, i) => (
        <div className="career-stats__item" key={i}>
          <div className="career-stats__num">
            {stat.value}
            <span className="career-stats__suffix">{stat.suffix}</span>
          </div>
          <div className="career-stats__label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
