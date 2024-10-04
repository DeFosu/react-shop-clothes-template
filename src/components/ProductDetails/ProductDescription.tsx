import React from 'react';
import DetailsButton from './DetailsButton';


const ProductDescription = () => {
  return (
    <div className='w-full mx-auto mb-[75px] pt-[70px] px-5 max-w-[1210px]'>
    <div className='max-w-xl m-auto'>
        <div className='text-center mb-10'>Description</div>
        <p className="mb-4 text-xs">
    A knitted sweater with exclusive embroidery in an oversized fit will become a bright element in creating your image.
  </p>
  <div className="mb-4 text-xs">
    <h2>Material:</h2>
    <p>- 100% acrylic.</p>
  </div>
  <div className="mb-4 text-xs">
    <h2>Details and Cut:</h2>
    <ul>
      <li>- Cut type: Oversize</li>
      <li>- Elastic cuffs, neck, and bottom</li>
    </ul>
  </div>
  <div className="mb-4 text-xs">
    <h2>Season:</h2>
    <p>- Demi-season</p>
  </div>
  <div className="mb-4 text-xs">
    <h2>Color:</h2>
    <p>- Black/Gray</p>
  </div>
  <div className="mb-4 text-xs">
    <h2>Care Instructions:</h2>
    <ul>
      <li>- Wash in normal mode at a temperature not higher than 30°C, without spinning</li>
      <li>- Bleaching is prohibited</li>
      <li>- Dry in a suspended state, without using artificial drying</li>
    </ul>
  </div>
  <div className="mb-4 text-xs">
    <h2>In the Photo:</h2>
    <ul>
      <li>- Height of the model: 175 cm</li>
      <li>- Model weight: 71 kg</li>
      <li>- Size of sweater: M</li>
    </ul>
  </div>
      </div>
      <div className="pb-6 flex items-center justify-around  w-full space-x-[20px] my-7">
        <DetailsButton variant="bigoutlined">
                 REVIEWS 11
                </DetailsButton>
        <DetailsButton variant="bigoutlined">
                 REVIEWS 22
                </DetailsButton>
                </div>
                <div className='flex justify-center'>
                <DetailsButton variant="withicon">
                <span className="h-5 w-5 mr-10 ml-2">+</span> {/* Icon */}
                <span className="tracking-wide">ДОДАТИ ВІДГУК</span> {/* Text */}
                </DetailsButton>
                </div>
      </div>
  );
};

export default ProductDescription;
