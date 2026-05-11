"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { FormData, FormErrors } from "../interface/Form.interface";
import { countryCodes } from "../data/CountryCode";
import { submitRegisterUser } from "@/utils/api/RegisterUserAPIWrapper";
import { RegisterRequest } from "@/network/public/register/RegisterUser.interface";

// ✅ Error type with discrimination
type ApiErrorType = 'network' | 'validation' | 'server' | 'timeout';

interface ApiError {
  type: ApiErrorType;
  message: string;
  statusCode?: number;
  retryable: boolean;
}

interface UserDetails {
  otp: string;
  verificationId: string;
}


interface UserDetailsFormProps {
  onSuccess: (details: UserDetails,data:FormData) => void;
}

const UserDetailsForm = ({
  onSuccess
}: UserDetailsFormProps) => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    orgName: "",
    email: "",
    mobile: "",
    countryCode: "+91",
  });

  // Validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // API state management
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [apiError, setApiError] = useState<ApiError | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  // UI state
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState<boolean>(false);

  // Abort controller for request cancellation
  const abortControllerRef = useRef<AbortController | null>(null);

  const MAX_RETRIES = 3;
  const RETRY_DELAY_MS = 1000;

  /**
   * Form validation
   */
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

  /**
   * Handle input change
   */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear API error when user modifies form
    if (apiError) {
      setApiError(null);
    }
  };

  /**
   * Handle country code selection
   */
  const handleCountryCodeSelect = (code: string): void => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
    }));
    setIsCountryDropdownOpen(false);
  };

  /**
   * Create API error with proper typing
   */
  const createApiError = (
    type: ApiErrorType,
    message: string,
    statusCode?: number
  ): ApiError => {
    return {
      type,
      message,
      statusCode,
      retryable: type === 'network' || type === 'timeout' || statusCode === 429 || statusCode === 503,
    };
  };

  /**
   * Retry submission with exponential backoff
   */
  const retrySubmission = (): void => {
    if (retryCount < MAX_RETRIES) {
      const delayMs = RETRY_DELAY_MS * Math.pow(2, retryCount);
      console.log(`Retrying in ${delayMs}ms (attempt ${retryCount + 1}/${MAX_RETRIES})`);

      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        handleSubmit({ preventDefault: () => {} } as FormEvent<HTMLFormElement>);
      }, delayMs);
    } else {
      setApiError(
        createApiError(
          'server',
          `Failed after ${MAX_RETRIES} attempts. Please try again later.`,
          500
        )
      );
    }
  };

  /**
   * Main form submission with proper error handling
   */
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;
    if (isLoading) return;

    setApiError(null);
    setIsLoading(true);

    try {
      // Prepare API request
      const registerRequest: RegisterRequest = {
        name: formData.name,
        orgName: formData.orgName,
        email: formData.email,
        mobile: formData.mobile,
        countryCode:formData.countryCode
        // Add other required fields based on your RegisterRequest interface
      };

      // Call API using the improved wrapper
      const result = await submitRegisterUser(registerRequest, (payload) => onSuccess(payload.details, payload.data));

      if (!result.success) {
        if (result.error) {
          throw result.error;
        }
        throw new Error('Registration failed');
      }

      // Success
      setIsSuccess(true);
      setRetryCount(0);
      // onSuccess(formData);

    } catch (error) {
      // Handle different error types
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setApiError(
          createApiError(
            'network',
            'Network connection error. Please check your internet connection.'
          )
        );
      } else if (error instanceof Error && error.name === 'AbortError') {
        setApiError(
          createApiError(
            'timeout',
            'Request was cancelled. Please try again.'
          )
        );
      } else if (error instanceof Error) {
        // Parse API error message
        const message = error.message || 'An error occurred. Please try again.';
        
        // Determine error type from message
        let errorType: ApiErrorType = 'server';
        if (message.includes('network') || message.includes('Network')) {
          errorType = 'network';
        } else if (message.includes('validation') || message.includes('invalid')) {
          errorType = 'validation';
        } else if (message.includes('timeout') || message.includes('Timeout')) {
          errorType = 'timeout';
        }

        setApiError(createApiError(errorType, message));
      } else {
        setApiError(
          createApiError(
            'server',
            'An unexpected error occurred. Please try again.'
          )
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Dismiss error message
   */
  const dismissError = (): void => {
    setApiError(null);
    setRetryCount(0);
  };

  /**
   * Get error display component
   */
  const getErrorDisplay = (): React.ReactNode | null => {
    if (!apiError) return null;

    const errorIcons: Record<ApiErrorType, string> = {
      network: '🌐',
      validation: '⚠️',
      server: '❌',
      timeout: '⏱️',
    };

    const errorTitles: Record<ApiErrorType, string> = {
      network: 'Connection Error',
      validation: 'Validation Error',
      server: 'Server Error',
      timeout: 'Request Timeout',
    };

    const bgColors: Record<ApiErrorType, string> = {
      network: 'bg-yellow-50 border-yellow-300',
      validation: 'bg-orange-50 border-orange-300',
      server: 'bg-red-50 border-red-300',
      timeout: 'bg-purple-50 border-purple-300',
    };

    return (
      <div className="mb-6 animate-in slide-in-from-top duration-300">
        <div className={`border-l-4 rounded-md p-4 ${bgColors[apiError.type]}`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{errorIcons[apiError.type]}</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  {errorTitles[apiError.type]}
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  {apiError.message}
                </p>
                {apiError.statusCode && (
                  <p className="text-xs text-gray-600 mt-2">
                    Error code: {apiError.statusCode}
                  </p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={dismissError}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Dismiss error"
            >
              ✕
            </button>
          </div>

          {/* Retry button for retryable errors */}
          {apiError.retryable && retryCount < MAX_RETRIES && (
            <div className="mt-4">
              <button
                type="button"
                onClick={retrySubmission}
                disabled={isLoading}
                className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg font-semibold text-sm uppercase tracking-wide hover:from-orange-500 hover:to-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? 'Retrying...' : `Retry (${retryCount + 1}/${MAX_RETRIES})`}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const selectedCountry = countryCodes.find(
    (c) => c.code === formData.countryCode
  );

  // Success screen
  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <span className="text-4xl">✓</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h3>
            <p className="text-gray-600 mb-2">
              Weve received your details successfully.
            </p>
            <p className="text-sm text-gray-500">
              Moving to verification...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-in slide-in-from-bottom duration-500">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Lets Get Started
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Please provide your details to schedule a call with us
            </p>
          </div>

          {/* Error display */}
          {getErrorDisplay()}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                disabled={isLoading}
                className={`w-full px-4 py-3 border-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ${
                  errors.name
                    ? 'border-red-300 bg-red-50 text-red-900'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:bg-blue-50'
                } ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-400'}`}
              />
              {errors.name && (
                <p className="text-red-600 text-xs font-medium mt-2 animate-in slide-in-from-top duration-200">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Organization Name */}
            <div>
              <label htmlFor="orgName" className="block text-sm font-semibold text-gray-900 mb-2">
                Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="orgName"
                name="orgName"
                value={formData.orgName}
                onChange={handleInputChange}
                placeholder="Your Company"
                disabled={isLoading}
                className={`w-full px-4 py-3 border-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ${
                  errors.orgName
                    ? 'border-red-300 bg-red-50 text-red-900'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:bg-blue-50'
                } ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-400'}`}
              />
              {errors.orgName && (
                <p className="text-red-600 text-xs font-medium mt-2 animate-in slide-in-from-top duration-200">
                  {errors.orgName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                disabled={isLoading}
                className={`w-full px-4 py-3 border-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ${
                  errors.email
                    ? 'border-red-300 bg-red-50 text-red-900'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:bg-blue-50'
                } ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-400'}`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs font-medium mt-2 animate-in slide-in-from-top duration-200">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-900 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>

              <div className="flex gap-2">
                {/* Country Code Dropdown */}
                <div className="relative flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    disabled={isLoading}
                    className={`px-3 py-3 border-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-200 ${
                      isLoading
                        ? 'opacity-60 cursor-not-allowed'
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    } ${isCountryDropdownOpen ? 'border-blue-500 bg-blue-50' : 'bg-white'}`}
                  >
                    <span className="text-lg">{selectedCountry?.flag}</span>
                    <span className="min-w-max">{formData.countryCode}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isCountryDropdownOpen ? 'rotate-180' : ''
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
                  {isCountryDropdownOpen && !isLoading && (
                    <div className="absolute top-full left-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-3 border-b border-gray-200">
                        <input
                          type="text"
                          placeholder="Search country..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                          onChange={(e) => {
                            const searchTerm = e.target.value.toLowerCase();
                            countryCodes.filter(
                              (c) =>
                                c.country.toLowerCase().includes(searchTerm) ||
                                c.code.includes(searchTerm)
                            );
                          }}
                        />
                      </div>

                      <div className="max-h-64 overflow-y-auto">
                        {countryCodes.map((item) => (
                          <button
                            key={item.code + item.country}
                            type="button"
                            onClick={() => handleCountryCodeSelect(item.code)}
                            className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors duration-150 ${
                              formData.countryCode === item.code
                                ? 'bg-blue-100 text-blue-900 border-l-4 border-blue-500'
                                : 'hover:bg-gray-100 text-gray-900'
                            }`}
                          >
                            <span className="text-xl">{item.flag}</span>
                            <span className="flex-1 text-sm">{item.country}</span>
                            <span className="font-semibold text-sm text-blue-600">{item.code}</span>
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
                  disabled={isLoading}
                  className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ${
                    errors.mobile
                      ? 'border-red-300 bg-red-50 text-red-900'
                      : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:bg-blue-50'
                  } ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-400'}`}
                />
              </div>

              {errors.mobile && (
                <p className="text-red-600 text-xs font-medium mt-2 animate-in slide-in-from-top duration-200">
                  {errors.mobile}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                isLoading
                  ? 'bg-gray-400 text-white cursor-not-allowed opacity-75'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg active:scale-95'
              }`}
            >
              {isLoading && (
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {isLoading ? 'Processing...' : 'Continue to Verification'}
            </button>

            {/* Terms */}
            <p className="text-center text-xs text-gray-600 leading-relaxed">
              By proceeding, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserDetailsForm;