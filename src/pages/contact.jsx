// components/Contact.tsx

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ca0c9c0e-916f-4f1d-8eed-9f751d4a04cc");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setStatus("Email Sent SuccessFully")
        } else {
         setStatus("Some Error Occured")
        }
        setFormData({
            name: "",
            email: "",
            message: "",
        })
    };
    
  return (
    <section id="contact" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-600 mt-2">I'd love to hear from you! Feel free to reach out.</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#008B8B] rounded-xl shadow p-6 md:p-10 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-[#008B8B] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-[#008B8B] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-[#008B8B] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full transition"
          >
            Send Message
          </button>

          {status && <p className="text-center text-sm text-gray-600 mt-4">{status}</p>}
        </form>

        {/* Contact Info */}
        <div className="text-center space-y-2">
          <p className="text-gray-700">
            📧 Email: <span className="font-medium text-gray-900">vepooja47@gmail.com</span>
          </p>
          <p className="text-gray-700">
            📞 Phone: <span className="font-medium text-gray-900">9140519337</span>
          </p>
          <p className="text-gray-700">
            📍 Location: <span className="font-medium text-gray-900">kanpur,INDIA</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;