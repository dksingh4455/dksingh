import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const card = () => {
  return (
    <>
     
        <div className=" max-w-[1240px] p-4 md:p-0  mx-auto gap-0 grid grid-cols-1 md:grid-cols-2 "
       >
          <div className="bg-[#34AD54] bg-cover  p-6 md:p-[55px]  text-white "  style={{
          backgroundImage: "url('/2.jpg')", width:"100% ", height:"auto" ,
        }}>
            <h1 className="text-[26px] p-2">Farmhouse in South Delhi
            </h1>
            <p
              className="font-light leading-relaxed p-2
"
            >
             If you're seeking a peaceful retreat amidst the hustle and bustle of Delhi, a farmhouse in South Delhi could be your ideal escape. With expansive green lawns, serene surroundings, and luxurious amenities, South Delhi offers a perfect blend of tranquility and accessibility. Located near prime areas such as Hauz Khas, Saket, and Greater Kailash, these farmhouses provide a much-needed oasis while being close to the city’s major attractions and business hubs.
            </p>
            <Link href="">
              <button className="flex mb-2 p-2 md:p-2">
                Read More
                <IoIosArrowRoundForward size={30} />
              </button>
            </Link>
          </div>
          <div
  className="bg-cover bg-center p-6 md:p-[55px] text-white grid items-center"
  style={{
    backgroundImage: "url('/1.jpg')",
  }}
>
            <h1 className="text-[26px] p-2">Farmhouse in Vasant Kunj
            </h1>
            <p className="font-light leading-relaxed p-2 md:p-0">
            Vasant Kunj is one of the most sought-after locations  for farmhouses in Delhi. Known for its lush greenery, wide open spaces, and proximity to the IGI Airport and major business districts, Vasant Kunj offers an exclusive lifestyle that's both convenient and serene. The area is dotted with upscale farmhouses that feature expansive lawns, private swimming pools, and modern amenities that cater to a luxurious living experience.
            </p>
            <Link href="">
              <button className="flex mb-2 p-2 md:p-0">
                Read More
                <IoIosArrowRoundForward size={30} />
              </button>
            </Link>
          </div>
        </div>
     
    </>
  );
};

export default card;
