"use client"
import React from "react";
import { PiSirenThin } from "react-icons/pi";
import { FcSalesPerformance } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";
const services = () => {
  const [message,setMessage]=useState('')
  const router=useRouter();
  const handleClcik=()=>{
    setMessage('cick');
    router.push('/contact')
  }
  return (
    <>
      <div className="">
        <div className="max-w-[1240px] mx-auto   grid grid-cols-1 md:grid-cols-3  gap-8 p-4 md:p-0 ">
          <div className=" text-balance ">
            <h3 className="uppercas  text-[#34AD54]">Services</h3>
            <h1
              className="text-[40px]  font-semibold
"
            >
              Farmhouse
            </h1>
            <h2
              className="text-[40px] font-semibold
"
            >
              Services
            </h2>
            <p
              className=" text-balance
 py-[10px] grid items-center text-[16px] "
            >
              South Delhi is known for its upscale lifestyle and serene
              ambiance, making it an ideal location for luxurious farmhouses.
              Whether you&nbsp;re planning a weekend retreat
            </p>
            <div className="py-[10px] ">
              <button onClick={handleClcik} className=" text-[16px]  bg-[#34AD54] p-4 py-[6px]  font-light text-white px-4  cursor-pointer hover:text-black">
                Contact Us
              </button>
            </div>
          </div>
          <div className="bg-[#F6FFF2]  hover:bg-[#34AD54] hover:text-white p-6">
            <div className="grid justify-center mt-10">
              <PiSirenThin color="rgb(255, 0, 255)" size={80} />
            </div>

            <h1 className="text-[26px]  text-center mt-2">Rent</h1>
            <p className="text-balance   text-center grid items-center p-3">
              Are you in search of a tranquil space for a short-term stay or a
              private celebration
            </p>
          </div>
          <div className="bg-[#F6FFF2]  hover:bg-[#34AD54] hover:text-white p-6">
            <div className="grid justify-center mt-10">
              <FcSalesPerformance color="orange" size={80} />
            </div>

            <h1 className="text-[26px]  text-center mt-2">Sale</h1>
            <p className="text-balance   text-center grid items-center p-3">
              If you’re planning to sell your farmhouse, we’ll connect you with
              the right buyers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
