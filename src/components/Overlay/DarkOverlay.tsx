import React, { type ReactNode } from "react";

type TDarkOverlay = {
    children: ReactNode;
    openStatus: boolean;
    closeFunction: () => void;
};

const DarkOverlay: React.FC<TDarkOverlay> = ({
    children,
    openStatus,
    closeFunction,
}) => {
    return (
        <div
            className={`absolute inset-0 grid bg-neutral-800 bg-opacity-60 place-content-center transition-opacity duration-300 ease-out ${
                openStatus ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="absolute inset-0" onClick={closeFunction}></div>

            <div className="relative">{children}</div>
        </div>
    );
};

export default DarkOverlay;
