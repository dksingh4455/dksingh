import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrSafariOption } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";
import { FcCallback } from "react-icons/fc";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <div className="bg-green-500 py-10">
      <div className="max-w-[1240px] mx-auto text-center py-[20px] p-4 md:p-0">
        {/* Section Heading */}
        <h5 className="text-orange-400 font-bold text-sm mb-2">FEATURES</h5>
        <h2 className="text-white text-4xl font-bold mb-8">Why Choose Us!!!</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Side */}
          <div className="flex flex-col space-y-8 items-center justify-center">
            <FaLocationDot size={80} color="rgb(251 146 60 / var(--tw-bg-opacity, 1))" className=" "
            
              title="Prime Locations"
              description="We offer farmhouses in top locations"
            />
            <div>
              <h1 className="text-white font-bold ">Prime Locations</h1>
            <span className="font-light text-white">We offer farmhouses in top locations</span>
            </div>
           
            <GrSafariOption size={80} color="rgb(251 146 60 / var(--tw-bg-opacity, 1))" className="px-2"
             
            />
             <div>
              <h1 className="text-white font-bold">Diverse Options</h1>
            <span className="font-light text-white">Our portfolio includes farmhouses for every purpose</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-500 mb-6">
              At Gitin Suri, we aim to make your farmhouse dreams a reality.
              Whether it’s renting for a weekend getaway, buying for investment,
              or leasing for a business venture, our team is here to assist you
              every step of the way
            </p>
            <Image
              src="/6.jpg" // Replace with your image path
              width={400}
              height={400}
              alt="Vegetables"
              className="mx-auto"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col space-y-8 items-center">
            <GrUserExpert size={80} color="rgb(251 146 60 / var(--tw-bg-opacity, 1))" className="px-2"
              icon="🚜"
              title="Expert Guidance"
              description="With years of experience, we guide you through the entire process"
            />
             <div>
              <h1 className="text-white font-bold">Diverse Options</h1>
            <span className="font-light text-white">Our portfolio includes farmhouses for every purpose</span>
            </div>
            <FcCallback size={80} color="rgb(251 146 60 / var(--tw-bg-opacity, 1))" className="px-2"
              icon="📞"
              title="24/7 Support"
              description="We Provide 24/7 Costumer Support"
            />
            <div>
              <h1 className="text-white font-bold">Diverse Options</h1>
            <span className="font-light text-white">Our portfolio includes farmhouses for every purpose</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-center">
      <div className="bg-orange-400 text-white text-3xl rounded-full h-16 w-16 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
