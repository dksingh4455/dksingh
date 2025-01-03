import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
    return (
      <footer className="bg-green-500 text-white pt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Get In Touch Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <p className="text-sm">Plot no. 6-B, Top Floor, Nalson, Nelson Mandela Marg, opp. B-11, Pocket 8, Sector D, Vasant Kunj, New Delhi, Delhi 110075</p>
            <p className="text-sm">gitin@rpgestate.in</p>
            <p className="text-sm">+91 98101 50047</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="bg-orange-500 p-2 rounded-full hover:scale-110 transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a
                href="#"
                className="bg-orange-500 p-2 rounded-full hover:scale-110 transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a
                href="#"
                className="bg-orange-500 p-2 rounded-full hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a
                href="#"
                className="bg-orange-500 p-2 rounded-full hover:scale-110 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">→ Home</Link></li>
              <li><Link href="about">→ About Us </Link></li>
              <li><Link href="services">→ Our Services</Link></li>
              <li><Link href="/">→ Meet The Team</Link></li>
              <li><Link href="blog">→ Latest Blog</Link></li>
              <li><Link href="contact">→ Contact Us</Link></li>
            </ul>
          </div>
  
          {/* Popular Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Popular Links</h3>
            <ul className="space-y-2 text-sm">
            <li><Link href="/">→ Home</Link></li>
              <li><Link href="about">→ About Us </Link></li>
              <li><Link href="services">→ Our Services</Link></li>
              <li><Link href="/">→ Meet The Team</Link></li>
              <li><Link href="blog">→ Latest Blog</Link></li>
              <li><Link href="contact">→ Contact Us</Link></li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe Our Newsletter Amet justo diam dolor rebum lorem stet sea justo kasd
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-2 text-gray-800"
              />
              <button className="bg-green-600 text-white px-1  py-2 hover:bg-green-700 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>
  
        {/* Bottom Footer Section */}
        <div className="bg-gray-800 text-center text-sm text-white py-4 mt-8">
          <p>
            All Rights Reserved. Designed by{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Deepak Singh
            </a>
          </p>
          <p>
            Distributed By{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Deepak Singh
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  