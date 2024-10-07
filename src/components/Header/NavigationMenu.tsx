import React from "react";

interface NavigationLink {
    text: string;
    color?: string;
}

interface NavigationMenuProps {
    links: NavigationLink[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ links }) => (
    <ul className="flex gap-5 text-xs font-light tracking-widest">
        {links.map((link, index) => (
            <li key={index} className={`py-2 ${link.color || ""}`}>
                <a href="">{link.text}</a>
            </li>
        ))}
    </ul>
);

export default NavigationMenu;
