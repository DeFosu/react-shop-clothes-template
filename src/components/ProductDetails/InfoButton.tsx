import React from 'react';

const InfoButton = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Replace this span with an actual icon element */}
      <span className="inline-block w-5 h-5">
      ⬜
      </span>
      <div className="relative">
        <span className="font-light text-sm underline underline-offset-4">Sizes</span>
    
      </div>
    </div>
  );
};

export default InfoButton;
