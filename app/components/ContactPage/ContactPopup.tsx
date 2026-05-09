// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   X,
//   Send,
//   User,
//   Mail,
//   Phone,
//   MessageSquare,
//   AlertCircle,
// } from "lucide-react";

// interface ContactPopupProps {
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
// }

// const ContactPopup = ({ isOpen, setIsOpen }: ContactPopupProps) => {
//   // 1. Form State
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   // 2. Error State
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Reset form when closed
//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({ name: "", phone: "", email: "", message: "" });
//       setErrors({});
//     }
//   }, [isOpen]);

//   const closeModal = () => setIsOpen(false);

//   // 3. Validation Logic
//   const validateForm = () => {
//     let newErrors: Record<string, string> = {};

//     if (!formData.name.trim()) newErrors.name = "Full Name is required";

//     // Email regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     // Phone validation (Indian 10-digit format)
//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!formData.phone) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Enter a valid 10-digit phone number";
//     }

//     if (!formData.message.trim())
//       newErrors.message = "Please enter your requirements";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);

//       // Simulate API Call
//       console.log("Form Data Submitted:", formData);
//       setTimeout(() => {
//         setIsSubmitting(false);
//         alert("Message sent successfully!");
//         closeModal();
//       }, 1500);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   return (
//     <section
//       onClick={(e) => e.stopPropagation()}
//       className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${
//         isOpen
//           ? "opacity-100 pointer-events-auto visible"
//           : "opacity-0 pointer-events-none invisible"
//       }`}
//     >
//       <div
//         className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
//         onClick={closeModal}
//       ></div>

//       <div
//         style={{ backgroundColor: "var(--color-bg-alt)", maxWidth: "550px" }}
//         className={`relative w-full rounded-[3rem] shadow-2xl overflow-hidden border border-[var(--color-border)] transition-transform duration-500 ease-out ${
//           isOpen ? "translate-y-0 scale-100" : "translate-y-20 scale-95"
//         }`}
//       >
//         <div
//           className="h-2 w-full"
//           style={{ backgroundColor: "var(--color-primary)" }}
//         ></div>

//         <button
//           onClick={closeModal}
//           className="absolute top-8 right-8 p-3 rounded-full hover:bg-slate-100 transition-all"
//         >
//           <X className="w-6 h-6 text-slate-400" />
//         </button>

//         <div className="p-8 md:p-12">
//           <div className="mb-10">
//             <h3
//               style={{
//                 color: "var(--color-primary)",
//                 fontFamily: "var(--font-display)",
//               }}
//               className="text-4xl font-black"
//             >
//               Get in{" "}
//               <span style={{ color: "var(--color-secondary)" }}>Touch</span>
//             </h3>
//           </div>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Name Field */}
//             <div className="space-y-1">
//               <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <User
//                   className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.name ? "text-red-400" : "text-slate-300"}`}
//                 />
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full pl-12 pr-4 py-4 rounded-2xl border outline-none transition-all ${
//                     errors.name
//                       ? "border-red-400 ring-4 ring-red-50"
//                       : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
//                   }`}
//                   placeholder="Anubhav Chaurasiya"
//                 />
//               </div>
//               {errors.name && (
//                 <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
//                   <AlertCircle size={12} /> {errors.name}
//                 </p>
//               )}
//             </div>

//             {/* Contact & Email Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div className="space-y-1">
//                 <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
//                   Phone
//                 </label>
//                 <div className="relative">
//                   <Phone
//                     className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.phone ? "text-red-400" : "text-slate-300"}`}
//                   />
//                   <input
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`w-full pl-12 pr-4 py-4 rounded-2xl border outline-none transition-all ${
//                       errors.phone
//                         ? "border-red-400 ring-4 ring-red-50"
//                         : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
//                     }`}
//                     placeholder="9876543210"
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
//                     <AlertCircle size={12} /> {errors.phone}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
//                   Email
//                 </label>
//                 <div className="relative">
//                   <Mail
//                     className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.email ? "text-red-400" : "text-slate-300"}`}
//                   />
//                   <input
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full pl-12 pr-4 py-4 rounded-2xl border outline-none transition-all ${
//                       errors.email
//                         ? "border-red-400 ring-4 ring-red-50"
//                         : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
//                     }`}
//                     placeholder="example@mail.com"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
//                     <AlertCircle size={12} /> {errors.email}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Message Field */}
//             <div className="space-y-1">
//               <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
//                 Requirements
//               </label>
//               <div className="relative">
//                 <MessageSquare
//                   className={`absolute left-4 top-5 w-5 h-5 transition-colors ${errors.message ? "text-red-400" : "text-slate-300"}`}
//                 />
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className={`w-full pl-12 pr-4 py-4 rounded-2xl border outline-none transition-all resize-none ${
//                     errors.message
//                       ? "border-red-400 ring-4 ring-red-50"
//                       : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
//                   }`}
//                   placeholder="How can we help you?"
//                 />
//               </div>
//               {errors.message && (
//                 <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
//                   <AlertCircle size={12} /> {errors.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               style={{
//                 backgroundColor: "var(--color-primary)",
//                 color: "var(--color-white)",
//               }}
//               className="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70"
//             >
//               {isSubmitting ? "Sending..." : "Send Your Message"}{" "}
//               <Send className="w-5 h-5" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPopup;

"use client";
import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ContactPopup = ({ isOpen, setIsOpen }: ContactPopupProps) => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Error & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form and errors when the section is closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    }
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  // Custom Validation Logic
  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Indian Phone Number Validation (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your query";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Logic: Only allow numbers and limit to 10 characters
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: onlyNums }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API Submission
      console.log("Submitting Data:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Thank you! Your message has been sent.");
        closeModal();
      }, 1500);
    }
  };

  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      {/* Background Overlay with Blur */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
        onClick={closeModal}
      ></div>

      {/* Content Section Card */}
      <div
        style={{
          backgroundColor: "var(--color-bg-alt)",
          maxWidth: "550px",
        }}
        className={`relative w-full rounded-[1rem] shadow-2xl overflow-hidden border border-[var(--color-border)] transition-transform duration-500 ease-out ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-20 scale-95"
        }`}
      >
        {/* <div
          className="h-4 w-full"
          style={{ backgroundColor: "var(--color-primary)" }}
        ></div> */}

        <button
          onClick={closeModal}
          className="absolute top-8 right-8 p-3 rounded-full hover:bg-slate-100 transition-all active:scale-90"
        >
          <X className="w-6 h-6 text-slate-400" />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-10 text-center lg:text-left">
            <h3
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-display)",
              }}
              className="text-4xl font-black tracking-tight"
            >
              Get in{" "}
              <span style={{ color: "var(--color-secondary)" }}>Touch</span>
            </h3>
            <p
              style={{ color: "var(--color-text-muted)" }}
              className="text-base mt-3 font-medium"
            >
              Fill the details and our team will get back to you shortly.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.name ? "text-red-400" : "text-slate-300"}`}
                />
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Anubhav Chaurasiya"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all font-medium ${
                    errors.name
                      ? "border-red-400 ring-4 ring-red-50"
                      : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Phone
                </label>
                <div className="relative">
                  <Phone
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.phone ? "text-red-400" : "text-slate-300"}`}
                  />
                  <input
                    name="phone"
                    type="text"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all ${
                      errors.phone
                        ? "border-red-400 ring-4 ring-red-50"
                        : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.email ? "text-red-400" : "text-slate-300"}`}
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all ${
                      errors.email
                        ? "border-red-400 ring-4 ring-red-50"
                        : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Your Query
              </label>
              <div className="relative">
                <MessageSquare
                  className={`absolute left-4 top-5 w-5 h-5 transition-colors ${errors.message ? "text-red-400" : "text-slate-300"}`}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help you?"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all resize-none font-medium ${
                    errors.message
                      ? "border-red-400 ring-4 ring-red-50"
                      : "border-[var(--color-border)] focus:ring-4 focus:ring-[var(--color-primary-light)]"
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs font-bold mt-1 ml-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
              }}
              className="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 text-lg"
            >
              {isSubmitting ? "Sending..." : "Send Your Message"}{" "}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPopup;
