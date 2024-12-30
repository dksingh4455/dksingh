import React from "react";
import Image from "next/image";
const Cardimg = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto  py-[20px] ">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Side - Image */}
          <div className="grid justify-center p-4 md:p-0">
            <Image
              src="/5.jpg"
              alt="Farmer with organic produce"
              width={400}
              height={400}
              className="rounded"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Right Side - Text and Icons */}
          <div className="p-4 md:p-4">
            <h3 className="text-green-600 font-semibold uppercase mb-2 py-[10px]">
              About Us
            </h3>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 py-[10px]">
              Explore Premium Farmhouse Services with Gitin Suri
            </h1>
            <p className="text-gray-600 mb-10 pt-[20px] mt-3 grid items-center justify-center">
              At Gitin Suri, we are passionate about connecting people with
              their dream farmhouses. With a deep understanding of the real
              estate market and a commitment to excellence, we specialize in
              providing top-notch services tailored to our clients needs
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 py-[10px]">
              <div className="text-center">
                <div className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-bold">Buy or Purchase</h3>
                <p className="text-gray-500 text-sm">
                  Looking to invest in a farmhouse? We provide curated options
                  that suit both your budget and lifestyle
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold">Sale of Farmhouses</h3>
                <p className="text-gray-500 text-sm">
                  If you&apos;re planning to sell your farmhouse, well connect you
                  with the right buyers and ensure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardimg;
