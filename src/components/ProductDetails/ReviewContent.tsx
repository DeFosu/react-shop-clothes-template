import React from 'react';
import DetailsButton from './DetailsButton';
import { FaHeart, FaComment } from "react-icons/fa";


const ReviewContent = () => {
  return (
    <div className='w-full mx-auto pb-4 pt-[70px] px-5 max-w-[1210px]'>
    <div className='max-w-xl m-auto'>
    <div className="border-b-2 pb-8 mb-4">
      <div className="flex items-center space-x-4 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">👤</span>
        </div>
        <div>
          <p className="text-sm text-gray-500">17 sep 2024 14:08</p>
          <p className="font-semibold">Donald1</p>
        </div>
      </div>
      <p className="mb-3">good</p>
      <div className="flex items-center space-x-4 text-gray-500 text-sm">
        <div className="flex items-center space-x-1">
          <FaHeart />
          <span>0</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaComment />
          <span>2</span>
        </div>
        <div><DetailsButton style="outlined" size='normal' outline='medium'>
                 Answer
                </DetailsButton></div>
      </div>
    </div>
                </div>
      </div>
  );
};

export default ReviewContent;
