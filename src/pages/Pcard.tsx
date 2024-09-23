import React, { useState } from "react";

// проверку на избранное
type TProductSize = {
  //типизация размеров
  title: string;
  number: number;
};

type TProductData = {
  //типизация данных товара
  imageURL: string;
  title: string;
  isFavorite: boolean;
  size: TProductSize[];
  price: number;
  oldPrice?: number;
  currency: string;
};

const AdidasShoes1: TProductData = {
  imageURL:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQgAKTdj4JaHDzB_fud9sNnOUwD1HyIFHVg&s",
  title: "Adidas Soft",
  isFavorite: true,
  size: [
    {
      title: "41",
      number: 10,
    },
    {
      title: "42",
      number: 8,
    },
    {
      title: "43",
      number: 5,
    },
  ],
  price: 2500,
  oldPrice: 3000,
  currency: "UAH",
};

const Pcard = ({ product }: { product: TProductData }) => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevValue) => (prevValue === 0 ? 1 : 0));
  };

  // проверка
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;

  // расчет процента скидки
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.oldPrice! - product.price) / product.oldPrice!) * 100
      )
    : 0;

  return (
    <div className="px-2 max-w-72">
      <div className="relative overflow-hidden group">
        <img
          className="aspect-[273/337] rounded-sm transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={product.imageURL}
          alt={product.title}
        />
        {hasDiscount && (
          <span className="absolute px-2 py-1 text-sm font-bold text-white bg-red-500 rounded top-2 left-2">
            -{discountPercentage}%
          </span>
        )}
        <button
          className="absolute flex items-center justify-center w-8 h-8 text-red-300 bg-white rounded-full shadow-md top-2 right-2"
          onClick={handleClick}
        >
          {value}
        </button>
      </div>
      <div className="pt-2">
        <div className="mb-1 text-base font-semibold">{product.title}</div>
        <p className="py-1 space-x-2 text-xs text-gray-400">
          {product.size.map((size) => size.title).join(" ")}
        </p>
      </div>
      <div className="pb-4">
        <span className="inline-block text-xl font-medium text-red-500">
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

export default Pcard;
