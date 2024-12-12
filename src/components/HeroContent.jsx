import React from 'react'

const HeroContent = () => {
  return (
   <>
   <div className='heroContent w-full mt-[100px] flex justify-center items-center animate-pulse'>
   <div className="content w-[700px]  bg-black p-10 border-[10px] border-violet-400 rounded-3xl bg-opacity-60">
    <h1 className='text-white flex flex-col items-center'>
        <span className='book text-[50px] font-extrabold'>Shivabook</span>
        <span className='bet text-[45px] font-medium italic text-violet-400'>Ultimate Betting Platform</span></h1>
   </div>
   </div>
   </>
  )
}

export default HeroContent