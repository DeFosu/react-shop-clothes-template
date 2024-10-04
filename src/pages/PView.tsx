import React from "react";
import ProductSlider from "../components/ProductDetails/ProductSlider";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductDescription from "../components/ProductDetails/ProductDescription";


//#f9f9f9 bg top
const PView: React.FC = () => {
    return (
        <div>    
            <div className="grid grid-cols-2 gap-4 pt-8 bg-[#f9f9f9]">
         <ProductSlider />
         <ProductDetails />
                  </div>
                  <ProductDescription /> 
         </div>


        
    );
};

export default PView;
