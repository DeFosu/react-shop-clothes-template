import React, { type ReactNode } from "react";

type TButton = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;

    style?: "text" | "contained" | "outlined" | "boldOutlined" | "withIcon" | "nonContained";
    size?: "small" | "normal" | "big";
    outline?: "no" | "medium" | "bold";
};

const DetailsButton: React.FC<TButton> = (props) => {
    const { children, className = "", style = "contained", size = "normal", outline = "no", } = props;

    const styleVariant = {
        text: "",  
        contained: "bg-gray-400 text-black font-normal py-5 px-14 tracking-wider",
        outlined: " pr-8 pl-2",  
        boldOutlined: "font-bold  py-5 tracking-wider",
        withIcon: "bg-black text-white flex items-center px-4 py-2",
        nonContained: "pr-8 pl-2", 
    };
    const sizeVariant = {
        small: "text-xs",  
        normal: "text-base",
        big: "text-lg",
    };
    const outlineVariant = {
        no: "",
        medium: "underline underline-offset-4 decoration-[1px]",
        bold: "underline underline-offset-[8px] decoration-[2px]",
    };

    const buttonStyle = `${styleVariant[style]} ${sizeVariant[size]} ${outlineVariant[outline]} ${className}`;

    return <button className={buttonStyle}>{children}</button>;
    
};

export default DetailsButton;
