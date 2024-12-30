// components/ProductSection.js
import Image from "next/image";
export default function ProductSection() {
    return (
      <section className="bg-white py-[20px]">
        <div className="max-w-[1240px] mx-auto text-center p-4 md:p-0">
          <p className="text-green-600 font-bold text-sm uppercase">Products</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Find Your Dream Farmhouse Today
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-green-600">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src="/5.jpg" // Replace with actual image path
                  width={400}
                  height={400}
                  alt="Organic Vegetables"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-green-600 h-[50%] bottom-0 -z-10"></div>
                <div className="p-4 bg-white relative ">
                  <h3 className="text-lg font-semibold text-gray-800">
                  Farmhouse
                  </h3>
                  <p className="text-green-600 font-bold text-xl"></p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex justify-center mt-8 ">
            <button className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              &larr;
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full hover:bg-green-700 transition ml-4">
              &rarr;
            </button>
          </div>
        </div>
      </section>
    );
  }
  