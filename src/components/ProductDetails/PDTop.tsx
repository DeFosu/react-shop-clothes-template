import React from 'react';
import ProductSlider from './ProductSlider';
import ProductDetails from './ProductDetails';

const PDTop = () => {
  return (
    <div className="">          
      <div className="grid grid-cols-2 gap-4 py-16">
        <ProductSlider />
        <ProductDetails />
      </div>
      </div>
  );
};

export default PDTop;
