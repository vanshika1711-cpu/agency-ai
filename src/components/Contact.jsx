import React, { useState } from "react";
import assets from "../assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "8fe946e9-9c50-470e-a68f-83c89b545b4f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40
      bg-white dark:bg-slate-950
      text-black dark:text-white
      transition-colors duration-300"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-medium mb-4">
          Reach out to us
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          From strategy to execution, we craft digital solutions.
        </p>
      </div>

      <form onSubmit={onSubmit} className="max-w-3xl mx-auto space-y-6">

        <div className="grid sm:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="block text-sm mb-2">
              Your name
            </label>

            <div className="
              flex items-center
              border border-gray-300 dark:border-slate-700
              rounded-xl px-4 py-3
              bg-white dark:bg-slate-800
              transition
            ">
              <img
                src={assets.person_icon}
                className="w-5 mr-3 opacity-60"
                alt=""
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="
                  w-full
                  bg-transparent
                  text-black dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  outline-none
                "
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">
              Email
            </label>

            <div className="
              flex items-center
              border border-gray-300 dark:border-slate-700
              rounded-xl px-4 py-3
              bg-white dark:bg-slate-800
              transition
            ">
              <img
                src={assets.email_icon}
                className="w-5 mr-3 opacity-60"
                alt=""
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="
                  w-full
                  bg-transparent
                  text-black dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  outline-none
                "
              />
            </div>
          </div>

        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-2">
            Message
          </label>

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Enter your message"
            className="
              w-full
              border border-gray-300 dark:border-slate-700
              rounded-xl px-4 py-3
              bg-white dark:bg-slate-800
              text-black dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              outline-none
              transition
            "
          ></textarea>
        </div>

        <button
          type="submit"
          className="
            bg-[#5044E5]
            text-white
            px-8 py-3
            rounded-full
            hover:scale-105
            transition
          "
        >
          Submit →
        </button>

        {/* Result */}
        {result && (
          <p className="mt-4 font-medium text-green-500">
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;