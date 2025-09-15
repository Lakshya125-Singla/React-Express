import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
              About ShoeShop
            </h1>
            <p className="text-lg mb-6 text-gray-600">
              We’re passionate about helping people express themselves through
              their footwear. Learn more about our journey, mission, and what
              drives us.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Explore Products
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhbSUyMFdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Team Working"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            ShoeShop started with a simple idea: shoes should not only be
            comfortable and high-quality but also an extension of your
            personality. Since our launch in 2020, we've been committed to
            curating the finest selection of sneakers and streetwear, from
            iconic brands to hidden gems. Our team lives and breathes footwear —
            and we want to share that passion with you.
          </p>
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Quality",
              desc: "We partner only with trusted brands to ensure long-lasting products made from premium materials.",
              icon: "👟",
            },
            {
              title: "Community",
              desc: "Our customers are at the heart of everything we do. We listen, learn, and grow together.",
              icon: "🤝",
            },
            {
              title: "Innovation",
              desc: "From style to sustainability, we aim to lead the way in modern shoe retailing.",
              icon: "🚀",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
