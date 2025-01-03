"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Choose from "@/components/choose"
import Cardsnew from "@/components/cardsnew"
const Products = () => {
  const [message,setMessage]=useState('')
  const router =useRouter();
  const handleClcik=()=>{
    setMessage('clecked');
    router.push('/')
  }
  return (
    <>
      <Navbar />
        <div className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/4.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-screen-lg mx-auto px-6">
        {/* Title */}
        <h1 className="text-white text-6xl font-bold mb-6">Why Coose us</h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <button onClick={handleClcik} className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600">
            Home
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600">
            Why Coose us
          </button>
        </div>
      </div>

      {/* Right-Side Image */}
      <div className="absolute right-12 bottom-16">
      
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

export default Products;
