import Image from "next/image";
import {
  FaTwitterSquare,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Review = () => {
  const teamMembers = [
    {
      name: "Farmhouse in South Delhi",
      designation: "Designation",
      image: "/first.jpg", // Replace with your image path
    },
    {
      name: "Farmhouse in Delhi NCR",
      designation: "Designation",
      image: "/firy2.jpg", // Replace with your image path
    },
    {
      name: "Farmhouse in Vasant Kunj",
      designation: "Designation",
      image: "/first3.jpg", // Replace with your image path
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6  py-[20px]">
      {teamMembers.map((member, index) => (
        <div
          key={index} // Add the key prop here
          className="relative bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative h-72">
            <Image
              src={member.image} // Use member.image instead of hardcoding the path
              alt={`${member.name}'s image`}
              width={1000}
              height={1000}
              quality={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Social Media Sidebar */}
          <div className="absolute top-0 right-0 bg-orange-500 h-full w-12 flex flex-col justify-center items-center space-y-10">
            <a
              href="#"
              className="text-white text-lg hover:scale-110 transform transition"
              aria-label="Twitter"
            >
              <FaTwitterSquare
                size={35}
                className="bg-white text-orange-500 rounded-full p-2"
              />
            </a>
            <a
              href="#"
              className="text-white text-lg hover:scale-110 transform transition"
              aria-label="Facebook"
            >
              <FaFacebookF
                size={35}
                className="bg-white text-orange-500 rounded-full p-2"
              />
            </a>
            <a
              href="#"
              className="text-white text-lg hover:scale-110 transform transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn
                size={35}
                className="bg-white text-orange-500 rounded-full p-2"
              />
            </a>
            <a
              href="#"
              className="text-white text-lg hover:scale-110 transform transition"
              aria-label="Instagram"
            >
              <FaInstagram
                size={35}
                className="bg-white text-orange-500 rounded-full p-2"
              />
            </a>
          </div>

          {/* Details Section */}
          <div className="bg-green-500 text-white p-4 text-center">
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-sm">{member.designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
