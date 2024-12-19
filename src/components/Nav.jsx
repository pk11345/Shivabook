import React from 'react';

const Nav = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center p-5 bg-black bg-opacity-60 text-white sticky top-0">
        <div className="logo">
          <img src="/logo.png" alt="Shivabook Logo" className="h-16" />
        </div>
        <ul className="social flex items-center space-x-6">
          <li>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <img src="/icons8-whatsapp-100.png" alt="WhatsApp" className="h-8" />
              <span className=" font-bold">9708902003</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bshivaonline?igsh=andwcDl1ajhpbDUy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <img src="/icons8-instagram-500.png" alt="Instagram" className="h-8" />
              <span className=" font-bold">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://t.me/+n44kyspP8KlmNDc1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <img src="/icons8-telegram-100.png" alt="Telegram" className="h-8" />
              <span className=" font-bold">Telegram</span>
            </a>
          </li>
        </ul>
      </div>
      </>
  );
};

export default Nav;