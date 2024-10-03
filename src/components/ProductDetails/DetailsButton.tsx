import React, { type ReactNode } from "react";

type TButton = {
    children: ReactNode;
    className?: string;
    variant?: "text" | "contained" | "outlined";
};

const DetailsButton: React.FC<TButton> = (props) => {
    const { children, className = "", variant = "contained" } = props;

    const styleVariant = {
        text: "underline",  
        contained: "bg-gray-400 text-black font-normal text-xs py-4 px-8",
        outlined:
            "font-light text-sm underline underline-offset-4",
    };

    const buttonStyle = `${styleVariant[variant]} ${className}`;

    return <button className={buttonStyle}>{children}</button>;
};

export default DetailsButton;
