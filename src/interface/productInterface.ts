

export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export interface Rating { 
    rate:  number;
    count: number;
}

export interface CartProduct {
    id: number
    title: string
    price: number
    image: string
    quantity: number
}

export interface ProductResponse {
    items: Product[];
    pages: number;
    first: number;
    last: number;
    next: number | null;
    prev: number | null;
}