import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 flex justify-center items-center bg-gray-500 text-red-700">
      <p>Copyright by &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
