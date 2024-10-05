import React, { type ReactNode } from "react";

type TButton = {
    children: ReactNode;
    className?: string;
    variant?: "text" | "contained" | "outlined" | "bigoutlined" | "withicon";
};

const DetailsButton: React.FC<TButton> = (props) => {
    const { children, className = "", variant = "contained" } = props;

    const styleVariant = {
        text: "underline",  
        contained: "bg-gray-400 text-black font-normal text-xs py-5 px-14 tracking-wider",
        outlined: "text-base underline underline-offset-4 decoration-[1px] pr-8",
        bigoutlined: " text-lg font-bold underline underline underline-offset-[8px] decoration-[2px] py-5 tracking-wider",
        withicon: "bg-black text-white flex items-center px-4 py-2",
    };

    const buttonStyle = `${styleVariant[variant]} ${className}`;

    return <button className={buttonStyle}>{children}</button>;
};

export default DetailsButton;
