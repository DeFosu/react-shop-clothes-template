import React from "react";

interface LinkListProps {
    links: string[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => (
    <ul className="flex items-center gap-4">
        {links.map((link, index) => (
            <li key={index}>
                <a href="">{link}</a>
            </li>
        ))}
    </ul>
);

export default LinkList;
