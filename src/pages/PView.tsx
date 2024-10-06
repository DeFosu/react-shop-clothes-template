import React from "react";
// import PDTop from "../components/ProductDetails/PDTop";
// import ProductDescription from "../components/ProductDetails/ProductDescription";
// import WatchedProduct from "../components/ProductDetails/WatchedProduct";
// import RecomendedProduct from "../components/ProductDetails/RecomendedProduct";
// import ReviewContent from "../components/ProductDetails/ReviewContent";
import SizesPrompt from "../components/ProductDetails/SizesPrompt";

const PView: React.FC = () => {
    return (
        <div className="py-10">    
            {/* <div> <PDTop />
            </div>
            <div> <ProductDescription /> </div>
            <ReviewContent />
            <div className="pb-6"><WatchedProduct /></div>
            <div className="pb-1"><RecomendedProduct /></div> */}
            <SizesPrompt />
         </div>
    );
};

export default PView;
