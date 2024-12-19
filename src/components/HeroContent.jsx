import React from 'react';

const HeroContent = () => {
  return (
    <>
      <div className="heroContent flex justify-center items-center mt-[100px] animate-pulse">
        <div className="content w-4/5 max-w-3xl bg-black p-10 border-4 border-violet-400 rounded-3xl bg-opacity-70">
          <h1 className="text-white text-center">
            <span className="block text-5xl font-extrabold">Shivabook</span>
            <span className="block text-4xl font-medium italic text-violet-400">Ultimate Betting Platform</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroContent;