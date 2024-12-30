// src/data/menuItems.js

const menuItems = [
    {
      title: "HOME",
      link: "/", // Make sure this route exists in your application
    },
    {
        title:"ABOUT",
        link:"/about"
    },
    {
        title:"SERVICE",
        link:"/services",
    },
    {
    title:"PRODUCT",
    link:"/products",
    },
    {
      title: "PAHES",
      link: "/", // Consider updating this to a specific route
      subItems: [
        { title: "Blog Grid ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
        { title: "Chhatarpur DLF", link: "/office-space-for-rent-in-gurgaon" },
        { title: "Dera Mand ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
        { title: "Fatehpur Ber", link: "/office-space-for-rent-in-gurgaon" },
        { title: "Gadaipur ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      ],
    },
  
    {
      title: "CONTACT",
      link: "/contact", // Ensure this route exists
    },
  ];
  
  export default menuItems;
  