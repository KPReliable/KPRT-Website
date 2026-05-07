"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import "../css/user-detail-form.css"
import { FormData,FormErrors,UserDetailsFormProps } from "../interface/Form.interface";
import { countryCodes } from "../data/CountryCode";



const UserDetailsForm: React.FC<UserDetailsFormProps> = ({
  onSuccess,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    orgName: "",
    email: "",
    mobile: "",
    countryCode: "+91",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);



  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.orgName.trim()) {
      newErrors.orgName = "Organization name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10,}$/.test(formData.mobile.replace(/\s/g, ""))) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCountryCodeSelect = (code: string): void => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
    }));

    setIsCountryDropdownOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        onSuccess(formData);
        setIsSubmitting(false);
      }, 500);
    }
  };

  const selectedCountry = countryCodes.find(
    (c) => c.code === formData.countryCode
  );

  return (
    <section className="user-details__section">
      <div className="user-details__container">
        {/* Header */}
        <div className="user-details__header">
          <h2 className="user-details__title">
            Lets Get Started
          </h2>

          <p className="user-details__subtitle">
            Please provide your details to schedule a call
            with us
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="user-details__form"
        >
          {/* Name Field */}
          <div className="user-details__form-group">
            <label
              htmlFor="name"
              className="user-details__label"
            >
              Full Name{" "}
              <span className="user-details__required">
                *
              </span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={`user-details__input ${
                errors.name
                  ? "user-details__input--error"
                  : ""
              }`}
            />

            {errors.name && (
              <span className="user-details__error-message">
                {errors.name}
              </span>
            )}
          </div>

          {/* Organization Name */}
          <div className="user-details__form-group">
            <label
              htmlFor="orgName"
              className="user-details__label"
            >
              Organization Name{" "}
              <span className="user-details__required">
                *
              </span>
            </label>

            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleInputChange}
              placeholder="Your Company"
              className={`user-details__input ${
                errors.orgName
                  ? "user-details__input--error"
                  : ""
              }`}
            />

            {errors.orgName && (
              <span className="user-details__error-message">
                {errors.orgName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="user-details__form-group">
            <label
              htmlFor="email"
              className="user-details__label"
            >
              Email Address{" "}
              <span className="user-details__required">
                *
              </span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className={`user-details__input ${
                errors.email
                  ? "user-details__input--error"
                  : ""
              }`}
            />

            {errors.email && (
              <span className="user-details__error-message">
                {errors.email}
              </span>
            )}
          </div>

          {/* Mobile */}
          <div className="user-details__form-group">
            <label
              htmlFor="mobile"
              className="user-details__label"
            >
              Mobile Number{" "}
              <span className="user-details__required">
                *
              </span>
            </label>

            <div className="user-details__mobile-input-wrapper">
              {/* Country Code Dropdown */}
              <div className="user-details__country-code-wrapper">
                <button
                  type="button"
                  onClick={() =>
                    setIsCountryDropdownOpen(
                      !isCountryDropdownOpen
                    )
                  }
                  className="user-details__country-code-btn"
                >
                  <span className="user-details__country-flag">
                    {selectedCountry?.flag}
                  </span>

                  <span className="user-details__country-code-text">
                    {formData.countryCode}
                  </span>

                  <svg
                    className={`user-details__country-code-icon ${
                      isCountryDropdownOpen
                        ? "user-details__country-code-icon--open"
                        : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Dropdown */}
                {isCountryDropdownOpen && (
                  <div className="user-details__country-dropdown">
                    <div className="user-details__dropdown-search">
                      <input
                        type="text"
                        placeholder="Search country..."
                        className="user-details__dropdown-search-input"
                        onChange={(
                          e: ChangeEvent<HTMLInputElement>
                        ) => {
                          const searchTerm =
                            e.target.value.toLowerCase();

                          countryCodes.filter(
                            (c) =>
                              c.country
                                .toLowerCase()
                                .includes(searchTerm) ||
                              c.code.includes(searchTerm)
                          );
                        }}
                      />
                    </div>

                    <div className="user-details__dropdown-list">
                      {countryCodes.map((item) => (
                        <button
                          key={item.code + item.country}
                          type="button"
                          onClick={() =>
                            handleCountryCodeSelect(
                              item.code
                            )
                          }
                          className={`user-details__dropdown-item ${
                            formData.countryCode ===
                            item.code
                              ? "user-details__dropdown-item--selected"
                              : ""
                          }`}
                        >
                          <span className="user-details__dropdown-flag">
                            {item.flag}
                          </span>

                          <span className="user-details__dropdown-country">
                            {item.country}
                          </span>

                          <span className="user-details__dropdown-code">
                            {item.code}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Input */}
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="10 digit number"
                className={`user-details__mobile-input ${
                  errors.mobile
                    ? "user-details__input--error"
                    : ""
                }`}
              />
            </div>

            {errors.mobile && (
              <span className="user-details__error-message">
                {errors.mobile}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="user-details__submit-btn"
          >
            {isSubmitting ? (
              <>
                <span className="user-details__spinner"></span>
                Processing...
              </>
            ) : (
              "Continue to Verification"
            )}
          </button>

          {/* Terms */}
          <p className="user-details__terms">
            By proceeding, you agree to our{" "}
            <a
              href="#"
              className="user-details__terms-link"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="user-details__terms-link"
            >
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default UserDetailsForm;