import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Pcard from "./Pcard";

type TProductSize = {
  //типизация размеров
  title: string;
  number: number;
};

type TProductData = {
  //типизация данных товара
  imageURL: string;
  title: string;
  isFavorite: boolean;
  size: TProductSize[];
  price: number;
  oldPrice?: number;
  currency: string;
};

const AdidasShoes1: TProductData = {
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
  oldPrice: 3000,
  currency: "UAH",
};
const Nike: TProductData = {
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
};

const NB: TProductData = {
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
};
const Layout: React.FC = () => (
  <div className="flex flex-col items-center min-h-screen">
    <Header />
    <Outlet />
    <Pcard product={AdidasShoes1} />
    <Pcard product={NB} />
    <Pcard product={Nike} />
  </div>
);

export default Layout;
