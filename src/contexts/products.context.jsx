import React, { createContext, useState } from 'react';
import SHOP_DATA from '../../src/shop-data.json';

export const ProductsContext = createContext({
    setProducrts: () => null,
    products: []
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const value = {products, setProducts};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};