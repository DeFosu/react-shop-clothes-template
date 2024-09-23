import React, { useState } from "react";

// Необходимо сделать логику для проверки, являеться ли продукт скидочным

// Это пример данных что должны передаваться в карточку товара, реализуй тиизацию,
// проверку на избранное, вывод массива размеров и логику расчета процента скидки.
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
  imageURL: "https://example.com/adidas-gay-shoes.jpg",
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

const Pcard = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    //переключение
    setValue((prevValue) => (prevValue === 0 ? 1 : 0));
  };

  return (
    <>
      <div className="px-2 max-w-72">
        <div className="relative overflow-hidden">
          <img
            className="aspect-[273/337] rounded-sm"
            src="https://krossmarket.by/image/cache/catalog/krossovki/18.06.23/kopijaimg_4026-1200x1200.jpg"
            alt="new"
          />
          <span className="absolute px-2 py-1 text-sm font-bold text-white bg-red-500 rounded top-2 left-2">
            -21%
          </span>
          <button
            className="absolute flex items-center justify-center w-8 h-8 text-red-300 bg-white rounded-full shadow-md top-2 right-2"
            onClick={handleClick}
          >
            {value}
          </button>
        </div>
        <div className="pt-2">
          <div className="mb-1 text-base font-semibold">
            Кросівки Staff beige & black
          </div>
          <p className="py-1 space-x-2 text-xs text-gray-400">
            40 41 42 43 44 45
          </p>
        </div>
        <div className="pb-4">
          <span className="inline-block text-xl font-medium text-red-500">
            1380 грн.
          </span>
          <span className="pl-2 text-base font-normal text-gray-500 line-through">
            2000 грн.
          </span>
        </div>
      </div>
    </>
  );
};

export default Pcard;
