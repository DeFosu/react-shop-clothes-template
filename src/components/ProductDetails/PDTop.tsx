import React from 'react';
import ProductSlider from './ProductSlider';
import ProductDetails from './ProductDetails';

const PDTop = () => {
  return (
    <div className="">          //#f9f9f9 bg top
      <div className="grid grid-cols-2 gap-4 pt-8">
        <ProductSlider />
        <ProductDetails />
      </div>


      </div>
  );
};

export default PDTop;
