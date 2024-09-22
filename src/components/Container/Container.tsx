import React, { type ReactNode } from "react";

type ContainerType = {
    children: ReactNode;
    className?: string;
};

const Container: React.FC<ContainerType> = ({ children, className = "" }) => {
    return (
        <div className={`container px-4 mx-auto ${className}`}>{children}</div>
    );
};

export default Container;
