import React, { type ReactNode } from "react";

type TButton = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;

    style?: "text" | "contained" | "outlined" | "bigOutlined" | "withIcon" | "nonContained";
    size?: "small" | "normal" | "big";
};

const DetailsButton: React.FC<TButton> = (props) => {
    const { children, className = "", style = "contained", size = "normal" } = props;

    const styleVariant = {
        text: "underline",  
        contained: "bg-gray-400 text-black font-normal py-5 px-14 tracking-wider",
        outlined: "underline underline-offset-4 decoration-[1px] pr-8 pl-2",  
        bigOutlined: "font-bold underline underline underline-offset-[8px] decoration-[2px] py-5 tracking-wider",
        withIcon: "bg-black text-white flex items-center px-4 py-2",
        nonContained: "pr-8 pl-2", 
    };
    const sizeVariant = {
        small: "text-xs",  
        normal: "text-base",
        big: "text-lg",
    };

    const buttonStyle = `${styleVariant[style]} ${sizeVariant[size]} ${className}`;

    return <button className={buttonStyle}>{children}</button>;
    
};

export default DetailsButton;
