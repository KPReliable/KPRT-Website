"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceCards } from "./servicesData";

export default function ServicesNavStrip() {
  const pathname = usePathname();

  return (
    <nav className="services-navstrip" aria-label="Services navigation">
      <div className="services-navstrip__inner">
        {serviceCards.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className={`services-navstrip__item ${
              pathname === service.href ? "services-navstrip__item--active" : ""
            }`}
          >
            <i className={`fas ${service.icon}`} />
            {service.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
