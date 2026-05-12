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
  const offices = [
    {
      branch: "Manesar Office",
      address:
        "Office No- 501, 5th Floor, Amrapali Corporate Hub, Sector 2, IMT Manesar, Gurugram, Haryana 122052",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4578137350713!2d76.93236487548545!3d28.36329917581177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e45253ab7c5%3A0xd93232850c1d9d92!2sKP%20Reliable%20Technique%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715068000000!5m2!1sen!2sin",
      phone: "+91 9312409696",
      link: "",
      email: "joshi@reliable_aes.in",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      branch: "Faridabad Office",
      address: "98R6+vhh Faridabad Hariyana",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3510.958564024467!2d77.3088874754849!3d28.392185175796213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIzJzMxLjkiTiA3N8KwMTgnNDEuMyJF!5e0!3m2!1sen!2sin!4v1715070000000!5m2!1sen!2sin",
      phone: "+91 9312409696",
      link: "",
      email: "joshi@reliable_aes.in",
      hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    },
  ];

  return (
    <section
      style={{
        paddingBlock: "var(--section-py)",
        backgroundColor: "var(--color-bg)",
      }}
      className="relative overflow-hidden font-[var(--font-body)]"
    >
      <div
        className="relative mx-auto px-6"
        style={{ maxWidth: "var(--max-w)" }}
      >
        {/* Header using Display Font and Primary Color */}
        <div className="text-center mb-20">
          <h2
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-display)",
            }}
            className="text-5xl font-black tracking-tight mb-6"
          >
            Our <span style={{ color: "var(--color-primary)" }}>Locations</span>
          </h2>
          <div
            className="h-1.5 w-20 rounded-full mx-auto"
            style={{ backgroundColor: "var(--color-secondary)" }}
          ></div>
        </div>

        <div className="space-y-32">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}
            >
              {/* Map Column */}
              <div className="w-full lg:w-3/5 relative group">
                <div
                  className="absolute -inset-4 rounded-[2.5rem] opacity-30 blur-lg transition duration-500"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                ></div>

                <div className="relative h-[450px] w-full  overflow-hidden shadow-xl border-4 border-white">
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
              <div className="w-full lg:w-2/5 space-y-10">
                <h3
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-display)",
                  }}
                  className="text-4xl font-extrabold"
                >
                  {office.branch}
                </h3>

                <div className="space-y-8">
                  {/* Location Info */}
                  <div className="flex items-start gap-5">
                    <div
                      className="flex-shrink-0 p-4 rounded-2xl shadow-sm"
                      style={{ backgroundColor: "var(--color-primary-light)" }}
                    >
                      <MapPin
                        className="w-6 h-6"
                        style={{ color: "var(--color-primary)" }}
                      />
                    </div>
                    <div>
                      <p
                        style={{ color: "var(--color-text-muted)" }}
                        className="text-xs font-bold uppercase tracking-widest mb-1"
                      >
                        Visit Us
                      </p>
                      <p
                        style={{ color: "var(--color-text)" }}
                        className="font-semibold leading-relaxed"
                      >
                        {office.address}
                      </p>
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p
                        style={{ color: "var(--color-secondary)" }}
                        className="text-[10px] font-black uppercase tracking-widest"
                      >
                        Hotline
                      </p>
                      <div className="flex items-center gap-3">
                        <Phone
                          className="w-4 h-4"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <span
                          style={{ color: "var(--color-text)" }}
                          className="font-bold"
                        >
                          {office.phone}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p
                        style={{ color: "var(--color-secondary)" }}
                        className="text-[10px] font-black uppercase tracking-widest"
                      >
                        Support
                      </p>
                      <div className="flex items-center gap-3">
                        <Mail
                          className="w-4 h-4"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <span
                          style={{ color: "var(--color-text)" }}
                          className="font-bold"
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
                    className="inline-flex items-center gap-4 p-4 border rounded-2xl shadow-sm"
                  >
                    <Clock
                      className="w-5 h-5"
                      style={{ color: "var(--color-secondary)" }}
                    />
                    <span
                      style={{ color: "var(--color-text)" }}
                      className="text-sm font-bold"
                    >
                      {office.hours}
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  {/* For Next.js */}
                  <Link
                    href={office.link} // Changed 'to' to 'href'
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    style={{
                      backgroundColor: "var(--color-primary-dark)",
                      color: "var(--color-white)",
                    }}
                    className="group relative px-8 py-4 rounded-2xl font-bold overflow-hidden transition-all shadow-lg active:scale-95 inline-block"
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
