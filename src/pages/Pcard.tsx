import React from "react";

const Pcard = () => {
  return (
    <>
      <div className="max-w-72 max-h-80 pl-2 pr-2">
        <div className="relative">
          <img
            className="aspect-[273/337]" //hover
            src="https://krossmarket.by/image/cache/catalog/krossovki/18.06.23/kopijaimg_4026-1200x1200.jpg"
            alt="new"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            -21%
          </span>
          <span className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-red-300">
            1
          </span>
        </div>

        <div className="pt-2">
          <div className="font-semibold text-base mb-1">
            Кросівки Staff beige & black
          </div>
          <p className="py-1 text-gray-400 text-xs space-x-2">
            40 41 42 43 44 45
          </p>
        </div>
        <div className="pb-4">
          <span className="inline-block text-xl font-medium text-red-500">
            1380 грн.
          </span>
          <span className="pl-2 line-through text-base font-normal text-gray-500">
            2000 грн.
          </span>
        </div>
      </div>
    </>
  );
};

export default Pcard;
