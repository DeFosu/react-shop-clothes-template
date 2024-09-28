export type TProductSize = {
    //типизация размеров
    title: string;
    number: number;
};

export type TProductData = {
    imageURL: string;
    title: string;
    isFavorite: boolean;
    size: TProductSize[];
    price: number;
    oldPrice: number;
    currency: string;
};
