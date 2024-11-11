"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

// Define types for form data and errors
interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const page: React.FC = () => {
  // Set the initial form data and errors with proper types
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  // Validate form data
  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must contain only numbers";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email sent successfully");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Error sending email");
    }
  };

  return (
    <>
      <div className="m-10">
        <div className="my-3">
          <h1 className="text-4xl font-bold text-center underline">
            GET IN TOUCH
          </h1>
          <p className="text-center">
            Welcome to our Contact page! Get in touch with us effortlessly. Find
            the phone numbers for each school branch and a dedicated email for
            all branches. We're here to assist you promptly and warmly welcome
            your inquiries or visits.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-4">
            <div>
              <h1 className="text-3xl font-medium">
                Al-hikmoh Primary School, Halleluyah Estate
              </h1>
              <p className="">
                Behind Onward Hospital, Halleluyah, <br /> Agunbelewo Area,
                Osogbo, Osun State.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-medium">
                Al-hikmoh Secondary School, Agunbelewo
              </h1>
              <p className="">
                Behind Onward Hospital, Halleluyah, <br /> Agunbelewo Area,
                Osogbo, Osun State.
              </p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.833433931387!2d4.531647470197273!3d7.807451089728532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787b59461a053%3A0xa5cddbcc61496d18!2sAgunbelewo%20Area!5e0!3m2!1sen!2sng!4v1731335605229!5m2!1sen!2sng"
              className="w-full h-[450px] rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl font-medium text-center mb-5">
                Please fill out the form below and we will be in touch with you.
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="p-3 outline-lemon w-full shadow-md rounded-lg"
                    placeholder="Full Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="p-3 outline-lemon w-full shadow-md rounded-lg"
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 outline-lemon w-full shadow-md rounded-lg"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="p-3 outline-lemon w-full shadow-md rounded-lg"
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="text-red-500">{errors.subject}</p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full my-4 h-[200px] outline-lemon shadow-md rounded-lg"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="bg-lemon text-white p-3 w-full">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
