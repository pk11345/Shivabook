import React from 'react'

const Nav = () => {
  return (
   <>
   <div className="navbar flex justify-between pt-3 pl-5 pr-5  w-[100%] z-10 ">
   <div className="logo">
      <img src="\logo.png" alt="" 
    className='logo h-[70px]' />
    </div>
    <ul className='social flex items-center justify-around w-[45%]'>
        <li>
            <a href="https://web.whatsapp.com/"className='text-white' target='blank'>
            <img src="\icons8-whatsapp-100.png" alt=""className='icon h-[60px] ' />9708902003</a></li>
        <li>
            <a href="https://www.instagram.com/bshivaonline?igsh=andwcDl1ajhpbDUy" className='text-white' target='blank'>
            <img src="\icons8-instagram-500.png" alt="" className='icon h-[60px] ' />Instagram</a></li>
        <li>
            <a href="https://t.me/+n44kyspP8KlmNDc1" target='blank' className='text-white'>
            <img src="\icons8-telegram-100.png" alt="" className='icon h-[60px]' />Telegram</a></li>
    </ul>
    </div>
   </>
  )
}

export default Nav