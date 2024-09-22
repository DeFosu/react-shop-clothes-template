import React from "react";
import IconWithNumbers from "./IconWithNumbers";
import LinkList from "./LinkList";

const TopBar: React.FC = () => {
    return (
        <div className="w-full bg-neutral-200">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-1 text-sm font-medium text-neutral-500">
                    <LinkList
                        links={["Link-1", "Link-2", "Link-3", "Link-4"]}
                    />
                    <div className="flex items-center gap-8">
                        <IconWithNumbers
                            items={["Icon", "Number", "Number", "Number"]}
                        />
                        <IconWithNumbers items={["Icon", "Email"]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
