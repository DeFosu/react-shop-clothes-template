import React, { useState } from "react";
import type { TProductData } from "./ProductCard.props";

const ProductCard: React.FC<TProductData> = (product) => {
    const [value, setValue] = useState('❤');

    const handleClick = () => {
        setValue((prevValue) => (prevValue === '❤' ? '🖤' : '❤'));
    };

    // проверка
    const hasDiscount = product.oldPrice > product.price;

    // расчет процента скидки
    const discountPercentage = hasDiscount
        ? Math.round(
              ((product.oldPrice! - product.price) / product.oldPrice!) * 100
          )
        : 0;

    return (
        <div className="px-2 max-w-72 group">
            <div className="relative overflow-hidden w-fit h-fit">
                <img
                    className="aspect-[3/4] w-full object-cover rounded-sm transition-transform duration-300 ease-in-out group-hover:scale-105"
                    src={product.imageURL}
                    alt={product.title}
                />
                {hasDiscount && (
                    <span className="absolute px-2 py-1 text-sm font-bold text-white bg-red-500 rounded top-2 left-2">
                        -{discountPercentage}%
                    </span>
                )}
                <button
                    className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md top-2 right-2"
                    onClick={handleClick}
                >
                    {value}
                </button>
            </div>
            <div className="pt-2">
                <div className="mb-1 text-base font-semibold">
                    {product.title}
                </div>
                <p className="py-1 space-x-2 text-xs text-gray-400">
                    {product.size.map((size) => size.title).join(" ")}
                </p>
            </div>
            <div className="pb-4">
                <span
                    className={`inline-block text-xl font-medium ${
                        hasDiscount && "text-red-500"
                    }`}
                >
                    {product.price} {product.currency}
                </span>
                {hasDiscount && (
                    <span className="pl-2 text-base font-normal text-gray-500 line-through">
                        {product.oldPrice} {product.currency}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
