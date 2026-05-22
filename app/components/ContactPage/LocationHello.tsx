import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";

const LocationHello = () => {
  // Office arrays kept exactly unchanged
  const offices = [
    {
      branch: "Manesar Office",
      address:
        "Office No- 501, 5th Floor, Amrapali Corporate Hub, Sector 2, IMT Manesar, Gurugram, Haryana 122052",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4578137350713!2d76.93236487548545!3d28.36329917581177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e45253ab7c5%3A0xd93232850c1d9d92!2sKP%20Reliable%20Technique%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715068000000!5m2!1sen!2sin",
      phone: "+91 9312409696",
      link: "",
      email: "joshi@reliable-aes.in",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      branch: "Faridabad Office",
      address: "2&3, 1st Floor, Varun Tower 1, Sector-20B,Faridabad,Haryana",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3510.958564024467!2d77.3088874754849!3d28.392185175796213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIzJzMxLjkiTiA3N8KwMTgnNDEuMyJF!5e0!3m2!1sen!2sin!4v1715070000000!5m2!1sen!2sin",
      phone: "+91 9312409696",
      link: "",
      email: "joshi@reliable-aes.in",
      hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    },
  ];

  return (
    <section
      style={{
        paddingBlock: "var(--section-py)",
        backgroundColor: "var(--color-bg)",
      }}
      className="relative overflow-hidden font-[var(--font-body)] py-12 sm:py-20 lg:py-24"
    >
      <div
        className="relative mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "var(--max-w)" }}
      >
        {/* Header using Display Font and Primary Color */}
        {/* CHANGED: Made heading spacing adaptive for smaller phone displays */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-display)",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 sm:mb-6"
          >
            Our <span style={{ color: "var(--color-primary)" }}>Locations</span>
          </h2>
          <div
            className="h-1 sm:h-1.5 w-16 sm:w-20 rounded-full mx-auto"
            style={{ backgroundColor: "var(--color-secondary)" }}
          ></div>
        </div>

        {/* Office Rows Loop Wrapper */}
        {/* CHANGED: Scaled layout gaps (`space-y-16 lg:space-y-32`) dynamically to eliminate empty screen space gaps on mobile layout columns */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 sm:gap-12 lg:gap-16 items-center w-full`}
            >
              {/* Map Column */}
              <div className="w-full lg:w-3/5 relative group">
                {/* Offset glow blur scaled down on small mobile landscape layers */}
                <div
                  className="absolute -inset-2 sm:-inset-4 rounded-xl sm:rounded-[2.5rem] opacity-30 blur-md sm:blur-lg transition duration-500"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                ></div>

                {/* CHANGED: Swapped static map height with fluid bounds (`h-[280px] sm:h-[400px] lg:h-[450px]`) */}
                <div className="relative h-[280px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden shadow-xl border-4 border-white rounded-lg sm:rounded-xl">
                  <iframe
                    src={office.mapLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title={office.branch}
                    className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  ></iframe>
                </div>
              </div>

              {/* Details Column */}
              <div className="w-full lg:w-2/5 space-y-6 sm:space-y-8 lg:space-y-10 text-left">
                <h3
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-display)",
                  }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
                >
                  {office.branch}
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  {/* Location Info */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className="flex-shrink-0 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm"
                      style={{ backgroundColor: "var(--color-primary-light)" }}
                    >
                      <MapPin
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                        style={{ color: "var(--color-primary)" }}
                      />
                    </div>
                    <div className="space-y-0.5">
                      <p
                        style={{ color: "var(--color-text-muted)" }}
                        className="text-[10px] sm:text-xs font-black uppercase tracking-widest"
                      >
                        Visit Us
                      </p>
                      <p
                        style={{ color: "var(--color-text)" }}
                        className="text-sm sm:text-base font-semibold leading-relaxed"
                      >
                        {office.address}
                      </p>
                    </div>
                  </div>

                  {/* Contact Row */}
                  {/* CHANGED: Wraps horizontally to grid-cols-1 on small smartphones to protect telephone info rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm sm:text-base">
                        <Phone
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <span
                          style={{ color: "var(--color-text)" }}
                          className="font-bold whitespace-nowrap"
                        >
                          {office.phone}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm sm:text-base overflow-hidden">
                        <Mail
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <span
                          style={{ color: "var(--color-text)" }}
                          className="font-bold truncate"
                        >
                          {office.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div
                    style={{
                      backgroundColor: "var(--color-white)",
                      borderColor: "var(--color-border)",
                    }}
                    className="inline-flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border rounded-xl sm:rounded-2xl shadow-sm max-w-full"
                  >
                    <Clock
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      style={{ color: "var(--color-secondary)" }}
                    />
                    <span
                      style={{ color: "var(--color-text)" }}
                      className="text-xs sm:text-sm font-bold truncate"
                    >
                      {office.hours}
                    </span>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6">
                  {/* For Next.js */}
                  <Link
                    href={office.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "var(--color-primary-dark)",
                      color: "var(--color-white)",
                    }}
                    className="group relative px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base overflow-hidden transition-all shadow-lg active:scale-95 inline-block w-full sm:w-auto text-center rounded-sm"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationHello;