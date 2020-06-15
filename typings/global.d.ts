declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }

    interface ResponseTypes {
        data: any
    }

    interface LikeItem {
        id: string
        tag: string;
        picture: string;
        shop: string;
        product: string;
        currentPrice: number;
        oldPrice: number;
        saleDesc: string;
    }

    interface DiscountItem {
        id: string
        picture: string
        shop: string
        currentPrice: number
        oldPrice: number
    }
}

export { }