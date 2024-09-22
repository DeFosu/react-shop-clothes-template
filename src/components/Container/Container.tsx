import React, { type ReactNode } from "react";

type ContainerType = {
    children: ReactNode;
};

const Container: React.FC<ContainerType> = ({ children }) => {
    return <div className="container px-4 mx-auto">{children}</div>;
};

export default Container;
