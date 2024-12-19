import React from 'react';

const Hero = () => {
  return (
    <>
      <img 
        src="/heroimage.jpeg" 
        alt="Hero Background for Shivabook" 
        className="heroImg absolute w-full h-screen object-cover top-0 -z-10" 
      />
    </>
  );
};

export default Hero;