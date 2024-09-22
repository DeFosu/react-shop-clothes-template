import React, { useState } from "react";
import {
    AiFillGoogleCircle,
    AiOutlineArrowLeft,
    AiOutlineClose,
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from "react-icons/ai";
import Container from "../Container/Container";
import DarkOverlay from "../Overlay/DarkOverlay";
import NavigationMenu from "./NavigationMenu";
import TopBar from "./TopBar";

const navigationMenuData = [
    {
        text: "Link-1",
        link: "/",
        color: "text-red-600",
    },
    {
        text: "Link-2",
        link: "/",
        color: "text-green-600",
    },
    {
        text: "Link-3",
        link: "/",
    },
    {
        text: "Link-4",
        link: "/",
    },
    {
        text: "Link-5",
        link: "/",
    },
    {
        text: "Link-6",
        link: "/",
    },
    {
        text: "Link-7",
        link: "/",
    },
];

const Header: React.FC = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);

    // Функции открытия/закрытия окна поиска
    const closeSearchWindow = () => setSearchOpen(false);
    const openSearchWindow = () => setSearchOpen(true);

    // Функции открытия/закрытия окна авторизации
    const closeAuthWindow = () => setAuthOpen(false);
    const openAuthWindow = () => setAuthOpen(true);

    return (
        <header className="w-full bg-neutral-950 text-neutral-100">
            <DarkOverlay
                openStatus={searchOpen}
                closeFunction={closeSearchWindow}
            >
                <div className="z-10">
                    <div className="flex justify-between font-semibold text-neutral-200">
                        <h2 className="text-2xl">Search</h2>
                        <button className="p-0.5" onClick={closeSearchWindow}>
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
            </DarkOverlay>
            <DarkOverlay openStatus={authOpen} closeFunction={closeAuthWindow}>
                <form action="" className="z-10 rounded-sm shadow ">
                    <div className="px-8 py-10 bg-neutral-50">
                        <div className="flex justify-between font-semibold tracking-wide text-neutral-900">
                            <h2 className="pb-1 pr-4 text-2xl font-normal uppercase border-b-[3px]  border-neutral-900 ">
                                Auth
                            </h2>
                            <button
                                className="p-0.5"
                                onClick={closeAuthWindow}
                                type="button"
                            >
                                <AiOutlineClose size={24} />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-8">
                            <div className="flex flex-col gap-8">
                                <h3 className="text-xs font-semibold uppercase text-neutral-800">
                                    Через аккаунт Staff
                                </h3>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-neutral-400">
                                        Номер телефону
                                    </label>
                                    <input
                                        type="tel"
                                        value={"+380"}
                                        className="border-b text-neutral-900 border-neutral-400 bg-neutral-50"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-neutral-400">
                                        Пароль
                                    </label>
                                    <input
                                        type="password"
                                        className="border-b text-neutral-900 border-neutral-400 bg-neutral-50"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h3 className="text-xs font-semibold uppercase text-neutral-800">
                                    Через соцмережу
                                </h3>
                                <button className="p-0.5 text-neutral-900">
                                    <AiFillGoogleCircle size={36} />
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <a
                                href="/"
                                className="text-xs font-normal tracking-wide uppercase text-neutral-600"
                            >
                                Відновлення доступу
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <button
                            className="flex items-center justify-center gap-4 py-4 font-medium tracking-wide uppercase text-neutral-900 bg-neutral-300"
                            type="button"
                        >
                            <AiOutlineArrowLeft size={20} /> Реєстрація
                        </button>
                        <button
                            className="flex items-center justify-center gap-4 py-4 font-medium tracking-wide uppercase text-neutral-100 bg-neutral-900"
                            type="submit"
                        >
                            Вхід
                        </button>
                    </div>
                </form>
            </DarkOverlay>
            <TopBar />
            <Container className="flex items-center gap-8">
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
                            <button
                                className="p-0.5"
                                onClick={openSearchWindow}
                            >
                                <AiOutlineSearch size={20} />
                            </button>
                            <button className="p-0.5" onClick={openAuthWindow}>
                                <AiOutlineUser size={20} />
                            </button>
                            <button className="p-0.5">
                                <AiOutlineHeart size={20} />
                            </button>
                            <button className="p-0.5">
                                <AiOutlineShoppingCart size={20} />
                            </button>
                        </div>
                    </div>
                    <nav>
                        <NavigationMenu links={navigationMenuData} />
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
