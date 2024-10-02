import React, { type ReactNode } from "react";

type TButton = {
    children: ReactNode;
    className?: string;
    variant?: "text" | "contained" | "outlined";
};

const BuyOneClickBtn: React.FC<TButton> = (props) => {
    const { children, className = "", variant = "contained" } = props;

    const styleVariant = {
        text: "underline",
        contained: "bg-gray-400 text-black font-normal text-xs py-4 px-8",
        outlined:
            " text-black font-normal text-xs py-4 px-8 bg-transparent border",
    };

    const buttonStyle = `${styleVariant[variant]} ${className}`;

    return <button className={buttonStyle}>{children}</button>;
};

export default BuyOneClickBtn;
