import React from "react";
import PDTop from "../components/ProductDetails/PDTop";
import ProductDescription from "../components/ProductDetails/ProductDescription";
import WatchedProduct from "../components/ProductDetails/WatchedProduct";
import RecomendedProduct from "../components/ProductDetails/RecomendedProduct";
import ReviewContent from "../components/ProductDetails/ReviewContent";

const PView: React.FC = () => {
    return (
        
        <div className=" w-full">    
            <div className="bg-[#f9f9f9] w-full flex justify-center">
                 <PDTop />
            </div>
            <div className="mx-auto container">
                 <ProductDescription /> 
        </div>
           <div className="mx-auto container"><ReviewContent />
            <div className="pb-6"><WatchedProduct /></div>
            <div className="pb-1"><RecomendedProduct /></div>
        </div>  
        </div>
    );
};

export default PView;
