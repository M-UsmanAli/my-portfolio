import React from 'react';

interface Props {
  text: string;
}

const AnimatedHomeText = ({ text }: { text: String }) => {
  return (
    <div className='w-full mx-auto flex items-center justify-center text-center overflow-hidden my-2'>
      <h1 className='inline-block w-full text-black font-bold capitalize text-6xl !text-left transition-all duration-1000 ease-in-out delay-100 mb-2'>
        {text}
      </h1>
    </div>
  );
};

export default AnimatedHomeText;
