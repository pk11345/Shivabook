import React from 'react'

const Nav = () => {
  return (
   <>
   <div className="navbar flex justify-between pt-3 pl-5 pr-5 absolute z-10 top-0 w-full ">
   <div className="logo">
      <img src="src\assets\logo.png" alt="" 
    className='logo h-[70px]' />
    </div>
    <ul className='social flex items-center gap-[30px] w-[25%]'>
        <li>
            <a href="https://web.whatsapp.com/"className='text-white' target='blank'>
            <img src="src\assets\icons8-whatsapp-100.png" alt=""className='h-[60px] ' />9708902003</a></li>
        <li>
            <a href="https://www.instagram.com/bshivaonline?igsh=andwcDl1ajhpbDUy" className='text-white' target='blank'>
            <img src="src\assets\icons8-instagram-500.png" alt="" className='h-[60px] ' />Instagram</a></li>
        <li>
            <a href="https://t.me/+n44kyspP8KlmNDc1" target='blank' className='text-white'>
            <img src="src\assets\icons8-telegram-100.png" alt="" className='h-[60px]' />Telegram</a></li>
    </ul>
    </div>
   </>
  )
}

export default Nav