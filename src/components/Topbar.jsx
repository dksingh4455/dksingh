// components/Header.js
import {
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white py-[100px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 items-center gap-4 ">
        {/* Phone Section */}
        <div className="flex items-center justify-start text-green-700 text-lg font-semibold">
          <FaPhoneAlt className="mr-2" />
          <h2>+91 8210246628</h2>
        </div>

        {/* Logo Section */}
        <div className="text-center text-[35px] font-bold">
          <span className="text-[#f93]">Farm</span>
          <span className="text-[#34AD54]">Fresh</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-end gap-3">
          <div className="bg-green-700 rounded-full p-2 hover:bg-black transition-all">
            <FaTwitter size={24} className="text-white" />
          </div>
          <div className="bg-green-700 rounded-full p-2 hover:bg-black transition-all">
            <FaFacebookF size={24} className="text-white" />
          </div>
          <div className="bg-green-700 rounded-full p-2 hover:bg-black transition-all">
            <FaLinkedinIn size={24} className="text-white" />
          </div>
          <div className="bg-green-700 rounded-full p-2 hover:bg-black transition-all">
            <FaInstagram size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
