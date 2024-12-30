import React from "react";
import { BiPurchaseTag } from "react-icons/bi";
import { FcCableRelease } from "react-icons/fc";
import { GiBuyCard } from "react-icons/gi";

const servicecard = () => {
  return (
    <>
      <div>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 p-4 md:p-0 py-[20px] gap-8">
          <div className="bg-[#F6FFF2]  hover:bg-[#34AD54] hover:text-white p-6">
            <div className="grid justify-center mt-10">
              <BiPurchaseTag color="orange" size={80} />
            </div>

            <h1 className="text-[26px]  text-center mt-2">Purchase</h1>
            <p className="text-balance   text-center grid items-center p-3">
              Our team provides personalized services to help you make informed
              decisions.
            </p>
          </div>
          <div className="bg-[#F6FFF2]  hover:bg-[#34AD54] hover:text-white p-6">
            <div className="grid justify-center mt-10">
              <FcCableRelease color="orange" size={80} />
            </div>

            <h1 className="text-[26px]  text-center mt-2">Lease </h1>
            <p className="text-balance   text-center grid items-center p-3">
              Leasing is an excellent option if you’re looking for flexibility
              without the commitment
            </p>
          </div>
          <div className="bg-[#F6FFF2]  hover:bg-[#34AD54] hover:text-white p-6">
            <div className="grid justify-center mt-10">
              <GiBuyCard color="orange" size={80} />
            </div>

            <h1 className="text-[26px]  text-center mt-2">Buy</h1>
            <p className="text-balance   text-center grid items-center p-3">
              Looking to invest in a farmhouse? We provide curated options that
              suit both 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default servicecard;
