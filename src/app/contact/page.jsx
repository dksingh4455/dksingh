import React from "react";
import Navbar from "@/components/navbar";
import Choose from "@/components/choose"
import Cardsnew from "@/components/cardsnew"

const Contact = () => {
  return (
    <>
      <Navbar />
        <div className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/4.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-screen-lg mx-auto px-6">
        {/* Title */}
        <h1 className="text-white text-6xl font-bold mb-6">About Us</h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600">
            Home
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600">
            About Us
          </button>
        </div>
      </div>
      <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h3 className="text-green-600 font-bold text-lg uppercase mb-2">Contact Us</h3>
          <h2 className="text-4xl font-bold text-gray-800">Please Feel Free To Contact Us</h2>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Left Form */}
          <div className="bg-green-500 p-6  py-[5px]">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-4 p-4 rounded-lg bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full mt-4 p-4 rounded-lg bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
              <button
                type="submit"
                className="w-full mt-4 bg-orange-400 text-white font-bold p-4 rounded-lg hover:bg-orange-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="bg-orange-400 p-8 rounded-lg shadow-lg text-white justify-center items-center">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">📍</div>
              <div>
                <h4 className="font-bold">Our Office</h4>
                <p>123 Street, New York, USA</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">📧</div>
              <div>
                <h4 className="font-bold">Email Us</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl mr-4">📞</div>
              <div>
                <h4 className="font-bold">Call Us</h4>
                <p>+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div className="pt-[60px]">
        <Choose />
      </div>
      <div className="pt-[40px]">
        <Cardsnew />
      </div>
     
    </>
  );
};

export default Contact;
