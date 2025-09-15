import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-12 md:py-24 px-4 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg mb-6 text-gray-600">
              Have a question, feedback, or just want to say hi? We'd love to
              hear from you.
            </p>
            <p className="text-gray-700">
              Email us at{" "}
              <a
                href="mailto:support@shoeshop.com"
                className="text-black underline hover:text-gray-800"
              >
                support@shoeshop.com
              </a>
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1740560051533-3acef26ace95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29udGFjdCUyMElsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Contact Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Send Us a Message
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto grid grid-cols-1 gap-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center"
        >
          <div>
            <h4 className="text-xl font-semibold mb-2">Email</h4>
            <p className="text-gray-600">support@shoeshop.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Address</h4>
            <p className="text-gray-600">
              123 Sneaker Ave, New York, NY 10001, USA
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;
