// Install Tailwind CSS before proceeding
// https://tailwindcss.com/docs/installation

// components/Testimonial.js
"use client"
import { useState } from "react";
import Image from "next/image";
export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: 'Gitin Suri and the team were amazing to work with! They helped us find the perfect farmhouse for our family’s weekend getaways. The process was seamless, and their attention to detail was incredible."',
      name: 'Priya Sharma',
      image: '/path-to-client-image.jpg',
    },
    {
      id: 2,
      text: 'I was looking to invest in a farmhouse, and Gitin Suri provided excellent options that fit my budget. Their expertise and guidance were instrumental in making the right decision. Highly recommend!',
      name: 'Rahul Verma',
      image: '/path-to-client-image-2.jpg',
    },
    {
      id: 3,
      text: 'Leasing a farmhouse through Gitin Suri was the best decision. The team’s professionalism and transparency made the process stress-free and enjoyable. Thank you for all the support!',
      name: 'Anjali Mehta',
      image: '/path-to-client-image-3.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full min-h-screen bg-green-50 flex items-center justify-center overflow-hidden py-[20px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/1.jpg)' }}></div>

      <div className="relative z-10 flex items-center justify-between max-w-5xl px-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200"
        >
          <span className="text-lg font-bold">&#8592;</span>
        </button>

        {/* Testimonial Card */}
        <div className=" relative bg-green-500 rounded-lg text-white p-8 shadow-lg max-w-lg text-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
            <Image
              src="/1.jpg"
              width={400}
              height={400}
              alt={currentTestimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-10 text-lg leading-relaxed">
            {currentTestimonial.text}
          </p>
          <h3 className="mt-4 font-semibold text-xl">{currentTestimonial.name}</h3>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200"
        >
          <span className="text-lg font-bold">&#8594;</span>
        </button>
      </div>
    </div>
  );
}
