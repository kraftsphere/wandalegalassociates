// app/components/ContactForm.js or wherever you want
"use client";

import { handleContactValidtion } from "@/lib/FormValidation";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    const fieldData = { ...formData, [name]: value };

    const allErrors = handleContactValidtion(fieldData);
    setErrors((prev) => ({
      ...prev,
      [name]: allErrors[name] || "", // Update only this field's error
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const updatedValue = type === "file" ? files[0] : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    validateField(name, updatedValue); // Real-time validation for only this field
  };

  const validate = () => {
    const validationErrors = handleContactValidtion(formData);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) {
      console.log("❌ Validation failed");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/api/contact-enquiries`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Form submitted successfully!");
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        }, 4000);
      } else {
        toast.error(
          `Failed to send message: ${result.error?.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:p-4 rounded-md space-y-4 text-[#040404] w-full max-w-[700px]"
    >
      <Toaster position="top-right" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.subject && (
            <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
          )}
        </div>
        {/* <div>
          <label className="block font-medium mb-1">Purpose</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-[11px]"
          >
            <option value="">Select Purpose</option>
            <option value="Nominate">Nominate a Brand</option>
            <option value="Survey">Participate in Survey</option>
            <option value="Recognition">Apply for Recognition</option>
            <option value="Other">Other</option>
          </select>
          {errors.purpose && (
            <p className="text-sm text-red-500 mt-1">{errors.purpose}</p>
          )}
        </div> */}
      </div>
      <div>
        <label className="block font-medium mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message}</p>
        )}
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="gradient-button px-4 font-semibold py-2 rounded-xl !ml-0 text-white"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default Form;
