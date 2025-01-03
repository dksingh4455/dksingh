"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Link from 'next/link';
import menuItems from './menuItems';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});
const [message,setMessage]=useState('');
const router=useRouter();
const handleCick=()=>{
 setMessage('clcik');
router.push('/');
}
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
   <>

 <nav className="bg-[#34AD54] text-white border border-slate-200 fixed w-full z-10 top-0">
      <div className="max-w-[1240px] container mx-auto px-2 py-[20px] flex justify-between items-center text-white">
        <div className="text-2xl font-bold">
          <button onClick={handleCick}>
          <Image src="/logo2.png" className='text-white' width={150} height={150} alt="logo"/>
          </button>
        
         
          {/* <Image src="/logos.png" height={80} width={80} /> */}
        </div>
        
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`md:flex items-center space-x-6  ${isOpen ? 'hidden' : 'hidden'} md:block`}  >
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link href={item.link} className="text-white hover:bg-[#fd7e14] p-4">
                {item.title}
              </Link>
              {item.subItems && (
                <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-md py-2">
                  {item.subItems.map((subItem, subIndex) => (
                   
                    <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      {subItem.title} 
                    </Link>
                    
                  ))}
                  
                </div>
              )}
            </div>
          ))}
          {/* Right side - Contact button */}
       <div className="hidden md:flex">
        <a href="tel:+9711350070" className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.3 5.57c.28-.28.74-.28 1.02 0L6.6 8.86c.28.28.28.74 0 1.02L4.04 12.44c-.28.28-.74.28-1.02 0-.39-.39-.39-1.03 0-1.42L3.88 10 2.3 8.42c-.39-.39-.39-1.03 0-1.42zm15.4 10.86c.39-.39.39-1.03 0-1.42l-2.56-2.56c-.39-.39-1.03-.39-1.42 0-.28.28-.28.74 0 1.02l1.58 1.58-2.82 2.83c-.28.28-.74.28-1.02 0l-6.6-6.6c-.28-.28-.28-.74 0-1.02L8.86 6.6c.28-.28.28-.74 0-1.02L6.3 2.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.03 0 1.42L5.88 4 3.3 6.58c-.39.39-.39 1.03 0 1.42L10 14.6l1.58-1.58c.39-.39 1.03-.39 1.42 0l2.56 2.56c.39.39 1.03.39 1.42 0z" />
          </svg>
          +919810150047
        </a>
      </div>
        </div>
      </div>
      
      <div className={`md:hidden divide-y divide-slate-300 ${isOpen ? 'block' : 'hidden'}`}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => toggleSubMenu(index)}>
              <Link href={item.link}>{item.title} </Link>
              {item.subItems && (
                <span>{openSubMenus[index] ? <IoIosArrowUp />
                  : <IoIosArrowDown />
}</span>
              )}
            </div>
            {item.subItems && openSubMenus[index] && (
              <div className="pl-4">
                {item.subItems.map((subItem, subIndex) => (
                  <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    {subItem.title}
                  </Link>
                ))}
                
              </div>
              
            )}
          </div>
        ))}
        
      </div>
       
    </nav>
   </>
  )
}

export default Navbar;
