import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";

const productData = [
    {
        imageURL:
            "https://krossmarket.by/image/cache/catalog/krossovki/18.06.23/kopijaimg_4026-1200x1200.jpg",
        title: "Adidas Soft",
        isFavorite: true,
        size: [
            {
                title: "41",
                number: 10,
            },
            {
                title: "42",
                number: 8,
            },
            {
                title: "43",
                number: 5,
            },
        ],
        price: 2500,
        oldPrice: 0,
        currency: "UAH",
    },
    {
        imageURL:
            "https://krossmarket.by/image/cache/catalog/krossovki/18.06.23/kopijaimg_4026-1200x1200.jpg",
        title: "Nike Air Max",
        isFavorite: false,
        size: [
            {
                title: "40",
                number: 12,
            },
            {
                title: "41",
                number: 9,
            },
            {
                title: "42",
                number: 6,
            },
        ],
        price: 2700,
        oldPrice: 3400,
        currency: "UAH",
    },
    {
        imageURL:
            "https://krossmarket.by/image/cache/catalog/krossovki/18.06.23/kopijaimg_4026-1200x1200.jpg",
        title: "New Balance Classic",
        isFavorite: false,
        size: [
            {
                title: "38",
                number: 20,
            },
            {
                title: "39",
                number: 13,
            },
            {
                title: "40",
                number: 10,
            },
        ],
        price: 3200,
        oldPrice: 4000,
        currency: "UAH",
    },
    {
        imageURL:
            "https://krossmarket.by/image/cache/catalog/krossovki/18.06.23/kopijaimg_4026-1200x1200.jpg",
        title: "New Balance Classic1",
        isFavorite: false,
        size: [
            {
                title: "38",
                number: 20,
            },
            {
                title: "39",
                number: 13,
            },
            {
                title: "40",
                number: 10,
            },
        ],
        price: 3200,
        oldPrice: 4000,
        currency: "UAH",
    },
];

const Pcard: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-1 pt-8 sm:grid-cols-4">
            {productData.map((data, index) => (
                <ProductCard {...data} key={index} />
            ))}
        </div>
    );
};

export default Pcard;
