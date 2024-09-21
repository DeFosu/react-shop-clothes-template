import React from "react";

const Pcard = () => {
    return (
        <>
            <div className="pl-2 pr-2 max-w-72 max-h-80">
                <div className="relative">
                    <img
                        className="aspect-[273/337] rounded-sm" //hover
                        src="https://krossmarket.by/image/cache/catalog/krossovki/18.06.23/kopijaimg_4026-1200x1200.jpg"
                        alt="new"
                    />
                    <span className="absolute px-2 py-1 text-sm font-bold text-white bg-red-500 rounded top-2 left-2">
                        -21%
                    </span>
                    <span className="absolute flex items-center justify-center w-8 h-8 text-red-300 bg-white rounded-full shadow-md top-2 right-2">
                        1
                    </span>
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
