import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center bg-gray-900 text-white px-6 py-4">
      <div className="Shivabook flex items-center gap-2 text-xl font-bold">ShivaBook
        <img className="logo h-[50px]" src="\logo.png" alt="" />
      </div>
      <ul className="contacts flex gap-4">
        <li>
          <a
            href="https://wa.me/9708902003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            WhatsApp
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bshivaonline?igsh=andwcDl1ajhpbDUy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://t.me/+n44kyspP8KlmNDc1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Telegram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
