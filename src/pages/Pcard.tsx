import React from "react";

const Pcard = () => {
  return (
    <>
      <div className="max-w-72 overflow-hidden">
        <img
          className="aspect-[273;337]"
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
        />
        <div className=" py-2">
          <div className="font-semibold text-sm mb-2">
            Кросівки Staff beige & black
          </div>
          <p className="text-gray-400 text-xs">40 41 42 43 44 45</p>
        </div>
        <div className="pt-4 pb-2">
          <span className="inline-block py-1 text-sm font-semibold text-gray-700">
            price
          </span>
        </div>
      </div>
    </>
  );
};

export default Pcard;
