import React, { useState } from "react";
import ToBasketBtn from "./ToBasketBtn";
import BuyOneClickBtn from "./BuyOneClickBtn";
import Sizes from "./Sizes";
import InfoButton from "./InfoButton";

const ProductDetails = () => {
    const hasDiscount = false;
    const [value, setValue] = useState("❤");

    const handleClick = () => {
        setValue((prevValue) => (prevValue === "❤" ? "🖤" : "❤"));
    };

    // Функция для расчета бонуса (3% от текущей цены)
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
            <div className="text-base font-semibold">
                Кросівки Staff white & brown
                <button
                    className="w-8 h-8 text-red-300 rounded-full top-2 right-2"
                    onClick={handleClick}
                >
                    {value}
                </button>
            </div>

            <span className="py-1 space-x-2 text-xs text-gray-400">
                Article: MS0276 Category: Shoes Category: Shoes
            </span>
            <div className="pb-4">
                <span
                    className={`inline-block text-xl font-medium ${
                        hasDiscount && "text-red-500"
                    }`}
                >
                    800 UAH
                </span>
                {hasDiscount && (
                    <span className="pl-2 text-base font-normal text-gray-500 line-through">
                        1000 UAH
                    </span>
                )}
            </div>
            <p className="mt-1 text-gray-400">Бонуси: 24 грн</p>
            {/* сделать ологику выщета бонуса в размере 3 проц от цены*/}
            <div className="">
                <Sizes />
                <ToBasketBtn />
                <BuyOneClickBtn variant="contained" className="bg-red-800">
                    BUY IN ONE CLICK
                </BuyOneClickBtn>
                <InfoButton />
            </div>
        </div>
    );
};

export default ProductDetails;
