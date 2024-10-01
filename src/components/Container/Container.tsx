import React, { type ReactNode } from "react";

type TContainer = {
    children: ReactNode;
    className?: string;
};

const Container: React.FC<TContainer> = ({ children, className = "" }) => {
    return (
        <div className={`container px-4 mx-auto ${className}`}>{children}</div>
    );
};

export default Container;
