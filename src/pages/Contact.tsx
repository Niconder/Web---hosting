import { ArrowRightIcon, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { Success } from "./Success";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FormField } from "../components/ui/form-field";
import { Input } from "../components/ui/input";
import PhoneNumberInput from "../components/phoneNumberInput";

export const Contact = () => {
  // Form fields data
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    company: ""
  });
  
  // Country code state for phone input
  const [countryCode, setCountryCode] = useState('US');
  const [searchTerm, setSearchTerm] = useState('');

  // Form validation state
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    company: ""
  });

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  // Handle phone number changes from PhoneNumberInput component
  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
    
    // Clear error when user types
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ""
      }));
    }
  };
  
  // Handle country code changes from PhoneNumberInput component
  const handleCountryChange = (value: string) => {
    setCountryCode(value);
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Required fields validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }
    
    // Phone validation is now handled by the PhoneNumberInput component
    // We just check if it's provided and not empty
    if (formData.phone.trim()) {
      // The component already validates the format, but we can add additional checks if needed
      if (formData.phone.length < 8) { // Minimum length for most international numbers
        newErrors.phone = "Phone number appears to be too short";
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, show success component
      setShowSuccess(true);
    }
  };

  // If success is shown, render the Success component
  if (showSuccess) {
    return <Success />;
  }

  return (
    <main className="max-w-[1440px] mx-auto sm:px-10 lg:px-16 mt-32">
      <img
        className="absolute w-[1035px] top-0 right-0"
        style={{zIndex: -1, overflow: "hidden"}}
        alt="Background graphic"
        src="https://c.animaapp.com/m8it1oue9zhJt6/img/group-3.png"
      />
      {/* Hero Section */}
      <section className="flex flex-col gap-14">
        <div className="flex flex-col gap-3">
          <h1 className="text-[56px] font-normal text-black font-['Inter',Helvetica] leading-normal">
            We Are Start Together
          </h1>
          <p className="text-lg font-light text-black leading-[27px] font-['Inter',Helvetica]">
            Our pricing model is designed to provide flexibility based on
            the size and complexity of the warehouse. Clients will go
            through a three-step selection process to create a tailored
            solution
          </p>
        </div>

        {/* Form Section */}
        <div className="flex items-start gap-[122px]">
          <div className="flex flex-col w-full max-w-[647px] gap-6">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center gap-4">
                <CheckCircle className="text-green-500 h-8 w-8" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Thank you for your message!</h3>
                  <p className="text-green-700">We've received your information and will contact you shortly.</p>
                </div>
              </div>
            ) : (
              <h2 className="text-lg font-semibold text-black font-['Inter',Helvetica]">
                Send Your Informations
              </h2>
            )}

            {/* Name and Surname */}
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <FormField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="flex-1">
                <FormField
                  label="Your Surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone and Email */}
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <PhoneNumberInput
                  defaultCountry={countryCode}
                  value={formData.phone}
                  onValueChange={handlePhoneChange}
                  onCountryChange={handleCountryChange}
                  searchTerm={searchTerm}
                  onSearchTermChange={setSearchTerm}
                  error={errors.phone}
                  helperText="Format: +country area-code number"
                />
              </div>
              <div className="flex-1">
                <FormField
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company Name */}
            <div>
              <FormField
                label="Your Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button 
                className="h-14 px-6 py-4 bg-[#00398e] rounded-[32px] text-white font-semibold flex items-center gap-8"
                onClick={handleSubmit}
                disabled={isSubmitted}
              >
                <span>Send Now</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Form Illustration */}
          <div className="hidden md:block">
            <img
              className="w-[329px] h-[269px]"
              alt="Form illustration"
              src="https://c.animaapp.com/m8iuawi4ZFzq2K/img/undraw-forms-1ciz-1.svg"
            />
          </div>
        </div>
      </section >
    </main >
  );
};
