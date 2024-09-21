import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";
import LinkList from "./LinkList";
import IconWithNumbers from "./IconWithNumbers";
import NavigationMenu from "./NavigationMenu";

const Header: React.FC = () => (
    <header className="w-full bg-neutral-950 text-neutral-100">
        <div className="absolute grid w-full h-full bg-neutral-800 bg-opacity-60 place-content-center">
            <div>
                <div className="flex justify-between font-semibold text-neutral-200">
                    <h2 className="text-2xl">Search</h2>
                    <button className="p-0.5">
                        <AiOutlineClose size={24} />
                    </button>
                </div>
                <form
                    action=""
                    className="flex items-center mt-4 overflow-hidden border-2 rounded border-neutral-900"
                >
                    <select
                        name="gender"
                        className="px-6 text-xl font-semibold h-14 text-neutral-900 bg-neutral-200"
                    >
                        <option value="all" className="font-normal">
                            All Genders
                        </option>
                        <option value="man" className="font-normal">
                            Man
                        </option>
                        <option value="woman" className="font-normal">
                            Woman
                        </option>
                    </select>
                    <div className="border h-14 border-neutral-900"></div>
                    <input
                        type="search"
                        name="search"
                        className="pl-6 text-xl h-14 text-neutral-900 placeholder-neutral-400 bg-neutral-200 focus:outline-none"
                        placeholder="Search..."
                    />
                    <button className="grid h-14 place-content-center aspect-square bg-neutral-200 text-neutral-900">
                        <AiOutlineSearch size={24} />
                    </button>
                </form>
            </div>
        </div>
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
                <div className="text-3xl font-bold">Logo</div>
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
                            <button>Btn-2</button>
                            <button className="p-0.5">
                                <AiOutlineSearch size={20} />
                            </button>
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
