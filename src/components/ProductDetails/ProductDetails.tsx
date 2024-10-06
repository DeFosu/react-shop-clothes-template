import React, { useState } from "react";
import DetailsButton from "./DetailsButton";
import Sizes from "./Sizes";



const ProductDetails = () => {
    const hasDiscount = true;
    const [value, setValue] = useState("❤");

    const handleClick = () => {
        setValue((prevValue) => (prevValue === "❤" ? "🖤" : "❤"));
    };

    // Функция для расчета бонуса
    // const calculateBonus = (price) => {
    //   return (price * 0.03).toFixed(2);
    // };
    return (
        <div className="mx-auto ">
                                
            <div className="flex items-center pb-6 space-x-4 text-xs font-normal text-gray-400">
                <span>Для хлопців</span>
                <span className="text-gray-300">—</span>
                <span>Взуття</span>
                <span className="text-gray-300">—</span>
                <span className="text-black">Кросівки, кеди</span>
            </div>
            <div className="text-3xl mb-6">
                Кросівки Staff white & brown
                <button
                    className="pl-14 text-red-400"
                    onClick={handleClick}
                >
                    {value}
                </button>
            </div>

            <span className="text-lg tracking-widest">
                Article: MS0276 Category: Shoes Category: Shoes
            </span>
            <div className="pt-10 pb-4">
                <span
                    className={`inline-block text-3xl ${
                        hasDiscount && "text-red-600"
                    }`}
                >
                    800 UAH
                </span>
                {hasDiscount && (
                    <span className="pl-2 text-3xl text-gray-500 line-through">
                        1000 UAH
                    </span>
                )}
            </div>
            <p className="border-b-2 pb-10 mt-1 mb-14 text-gray-400">Бонуси: 24 грн</p>
            {/* сделать ологику выщета бонуса в размере 3 проц от цены*/}
            <div className="mb-10">
                <Sizes />    
                </div>
                <div className="mb-8">    <>⬜</><DetailsButton variant="outlined">
                 Sizes
                </DetailsButton></div>
                <div className="pb-12">         
                <DetailsButton variant="contained" className="bg-green-800 text-white mr-8">
                    ADD TO BASKET
                </DetailsButton>
                <DetailsButton variant="contained" className="bg-gray-300">
                    BUY IN ONE CLICK
                </DetailsButton>
                </div>
                <div>
                <>⬜</><DetailsButton variant="outlined">
                 Delivery,  payment, return
                </DetailsButton>
                <>⬜</><DetailsButton variant="outlined">
                 Availability in stores
                </DetailsButton>
               </div>
                <div>
           </div>
        </div>
    );
};

export default ProductDetails;
