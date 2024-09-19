import React from "react";

interface IconWithNumbersProps {
    items: string[];
}

const IconWithNumbers: React.FC<IconWithNumbersProps> = ({ items }) => (
    <div className="flex items-center gap-4">
        {items.map((item, index) => (
            <a href="" key={index}>
                {item}
            </a>
        ))}
    </div>
);

export default IconWithNumbers;
