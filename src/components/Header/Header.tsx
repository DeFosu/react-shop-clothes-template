import React from "react";
import LinkList from "./LinkList";
import IconWithNumbers from "./IconWithNumbers";
import NavigationMenu from "./NavigationMenu";

const Header: React.FC = () => (
    <header className="w-full bg-neutral-950 text-neutral-100">
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
        <div className="container px-4 mx-auto">
            <div className="flex items-center gap-8">
                <div className="text-3xl font-bold">Staff</div>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <button className="py-2 text-sm uppercase">
                                Для хлопців
                            </button>
                            <button className="py-2 text-sm font-normal uppercase">
                                Для дівчат
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <button>Btn-1</button>
                            <button>Btn-2</button>
                            <button>Btn-3</button>
                            <button>Btn-4</button>
                            <button>Btn-5</button>
                        </div>
                    </div>
                    <nav>
                        <NavigationMenu
                            links={[
                                { text: "Link-1", color: "text-red-600" },
                                { text: "Link-2", color: "text-green-600" },
                                { text: "Link-3" },
                                { text: "Link-4" },
                                { text: "Link-5" },
                                { text: "Link-6" },
                                { text: "Link-7" },
                            ]}
                        />
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
