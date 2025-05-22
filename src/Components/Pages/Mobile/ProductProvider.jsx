import { useState, useEffect } from 'react';
import { ProductContext } from './ProductContext';
import axios from 'axios';

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [res1, res2, res3] = await Promise.all([
                    axios.get('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/apple.json'),
                    axios.get('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/samsung.json'),
                    axios.get('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/xiaomi.json'),
                ]);

                setProducts([...res1.data, ...res2.data, ...res3.data]);
            } catch (error) {
                console.error('Lỗi tải dữ liệu:', error);
            }
        };
        fetchData();
    }, []);

    return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};
