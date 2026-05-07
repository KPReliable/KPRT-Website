// // import React from 'react'

// // const LocationHello = () => {
// //   return (
// //     <div>LocationHello</div>
// //   )
// // }

// // export default LocationHello

// import React from "react";

// const LocationHello = () => {
//   // Replace the URL inside src with your actual Google Maps Embed link
//   const mapSource =
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4578137350713!2d76.93236487548545!3d28.36329917581177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e45253ab7c5%3A0xd93232850c1d9d92!2sKP%20Reliable%20Technique%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715068000000!5m2!1sen!2sin";
//   const offices = [
//     {
//       branch: "Manesar Office",
//       address:
//         "Office No- 501, 5th Floor, Amrapali Corporate Hub, Sector 2, IMT Manesar, Gurugram, Haryana 122052",
//       mapLink:
//         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4578137350713!2d76.93236487548545!3d28.36329917581177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e45253ab7c5%3A0xd93232850c1d9d92!2sKP%20Reliable%20Technique%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715068000000!5m2!1sen!2sin",
//       phone: "+91 124 XXX XXXX",
//       email: "manesar@kpreliable.com",
//       hours: "Mon - Sat: 9:00 AM - 6:00 PM",
//     },
//     {
//       branch: "Lucknow Office", // Example branch
//       address:
//         "Scooter India Chauraha, Near Transport Nagar, Lucknow, Uttar Pradesh 226008",
//       mapLink:
//         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4578137350713!2d76.93236487548545!3d28.36329917581177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e45253ab7c5%3A0xd93232850c1d9d92!2sKP%20Reliable%20Technique%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715068000000!5m2!1sen!2sin",
//       phone: "+91 522 XXX XXXX",
//       email: "lucknow@kpreliable.com",
//       hours: "Mon - Sat: 10:00 AM - 7:00 PM",
//     },
//   ];
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Visit Our Office</h2>
//           <p className="mt-2 text-gray-600">
//             We are located in the heart of the city. Stop by and say hello!
//           </p>
//         </div>

//         {offices.map((office, index) => (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {/* First Map Container */}
//               <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-4">
//                 <iframe
//                   src={office.mapLink}
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen={true}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Primary Office Location"
//                   className="grayscale-[20%] hover:grayscale-0 transition-all duration-300"
//                 ></iframe>
//               </div>

//               {/* Second Map Container */}
//               <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200"></div>
//             </div>
//           </>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LocationHello;

import React from "react";
import { Mail, MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const LocationHello = () => {
  const offices = [
    {
      branch: "Manesar Office",
      address:
        "Office No- 501, 5th Floor, Amrapali Corporate Hub, Sector 2, IMT Manesar, Gurugram, Haryana 122052",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4578137350713!2d76.93236487548545!3d28.36329917581177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e45253ab7c5%3A0xd93232850c1d9d92!2sKP%20Reliable%20Technique%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715068000000!5m2!1sen!2sin",
      phone: "+91 124 XXX XXXX",
      email: "manesar@kpreliable.com",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      branch: "Lucknow Office",
      address:
        "Scooter India Chauraha, Near Transport Nagar, Lucknow, Uttar Pradesh 226008",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.3332040683!2d80.8523312!3d26.8438885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715068000000!5m2!1sen!2sin",
      phone: "+91 522 XXX XXXX",
      email: "lucknow@kpreliable.com",
      hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Locations
          </h2>
          <div className="mt-4 w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We are strategically located to serve you better. Visit us at any of
            our offices for expert assistance.
          </p>
        </div>

        {/* Office List */}
        <div className="space-y-24">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              {/* Map Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                  <iframe
                    src={office.mapLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title={office.branch}
                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Details Column */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                    Branch Office
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">
                    {office.branch}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info Row */}
                  <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-50 rounded-xl">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Call Us
                        </p>
                        <p className="font-semibold text-gray-900">
                          {office.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-50 rounded-xl">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Email Us
                        </p>
                        <p className="font-semibold text-gray-900">
                          {office.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">
                        Office Hours
                      </p>
                      <p className="font-semibold text-gray-900">
                        {office.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-300 font-medium">
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </button>
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
