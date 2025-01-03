"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FullScreenCarousel() {
  const [message,setMessage]=useState('');
  const router =useRouter();
  const handleClcik=()=>{
    setMessage('clicked');
    router.push('/contact')
  }
  return (
    <div className="w-full md:h-screen">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full md:h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full md:h-screen pt-[20px]">
            <Image
              src="/2.jpg"
              alt="Fresh Vegetables"
              width={1000}
              height={1000}
              
              quality={100}
              style={{ width: "100%", height: "100vh" }}
            />

            {/* Overlay */}
            <div className="max-w-[940px] mx-auto absolute inset-0  flex flex-col justify-center items-center text-center px-4 md:items-start md:text-left md:px-16">
              <p className="text-white text-base md:text-lg font-medium">
                Why Choose Us
              </p>
              <h1 className="text-white text-3xl md:text-6xl font-bold mt-4 leading-snug">
                Explore Premium Farmhouse <br /> Services with Gitin Suri
              </h1>
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
                <button className="bg-green-600 text-white px-6 py-3 text-base md:text-lg rounded hover:bg-green-700 transition">
                  Explore
                </button>
                <button onClick={handleClcik} className="bg-orange-500 text-white px-6 py-3 text-base md:text-lg rounded hover:bg-orange-600 transition">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/4.jpg"
              alt="Fresh Vegetables"
              width={1000}
              height={1000}
              quality={100}
              style={{ width: "100%", height: "100vh" }}
            />
            {/* Overlay */}
            <div className="max-w-[940px] mx-auto  absolute inset-0  flex flex-col justify-center items-center text-center px-4 md:items-start md:text-left md:px-16">
              <p className="text-white text-base md:text-lg font-medium">
              Farmhouse in South Delhi
              </p>
              <h1 className="text-white text-3xl md:text-6xl font-bold mt-4 leading-snug">
              Luxurious Farmhouse in South Delhi <br /> Your Dream Retreat Awaits
              </h1>
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
                <button className="bg-green-600 text-white px-6 py-3 text-base md:text-lg rounded hover:bg-green-700 transition">
                  Explore
                </button>
                <button onClick={handleClcik} className="bg-orange-500 text-white px-6 py-3 text-base md:text-lg rounded hover:bg-orange-600 transition">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
