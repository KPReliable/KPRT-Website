import { leadershipTeam } from "../../data/aboutData";

export default function LeadershipTeam() {
  return (
    <section className="leadership">
      <div className="leadership__inner">
        {/* Header */}
        <div className="leadership__header">
          <span className="section-eyebrow">The People Behind KPRT</span>
          <h2 className="section-title">
            Our <span>Leadership</span> Team
          </h2>
          <p className="section-subtitle">
            Decades of combined expertise in quality assurance, supply chain
            management, and automotive manufacturing — guiding every decision
            at KPRT.
          </p>
        </div>

        {/* Team Grid */}
        <div className="leadership__grid">
          {leadershipTeam.map((member) => (
            <div key={member.name} className="leadership__card">
              {/* Avatar */}
              <div className="leadership__avatar">
                <span>{member.initials}</span>
              </div>

              {/* Zone badge */}
              {member.zone && (
                <div className="leadership__zone">
                  <i className="fas fa-map-marker-alt" />
                  {member.zone}
                </div>
              )}

              {/* Info */}
              <h3 className="leadership__name">{member.name}</h3>
              <div className="leadership__title">{member.title}</div>

              {/* Divider */}
              <div className="leadership__divider" />

              {/* Bio */}
              <p className="leadership__bio">{member.bio}</p>

              {/* Social links */}
              <div className="leadership__social">
                <a
                  href="#"
                  className="leadership__social-link"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="#"
                  className="leadership__social-link"
                  aria-label={`Email ${member.name}`}
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
