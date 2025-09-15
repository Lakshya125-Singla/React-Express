import React from "react";
import { motion } from "framer-motion";

const shoes = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1656057903797-175389ce695d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1715003132895-b10a23d3c90f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHVtYSUyMHNob2VzfGVufDB8fDB8fHww",
  },
];

const Home = () => {
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
              Step Into Style
            </h1>
            <p className="text-lg mb-6 text-gray-600">
              Discover the latest sneakers from your favorite brands.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img
              src="https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=egrXx_zXNkFg74KkmrRwmCywJD4YcP3NWchqYkLoHPM="
              alt="Hero Shoe"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Shoes
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {shoes.map((shoe) => (
            <motion.div
              key={shoe.id}
              className="bg-gray-50 rounded-lg shadow hover:shadow-xl transition overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: shoe.id * 0.1 }}
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{shoe.name}</h3>
                <p className="text-gray-500 mt-1">{shoe.price}</p>
                <button className="mt-4 bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
