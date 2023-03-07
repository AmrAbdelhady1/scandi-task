import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';


const Context = createContext();

export const StateContext = ({ children }) => {

    const [productData, setProductData] = useState([]);
    const [isChecked, setIsChecked] = useState([]);
    const [sku, setSku] = useState(null);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [productType, setProductType] = useState(null);
    const [productDesc, setProductDesc] = useState(null);
    const [height, setHeight] = useState(null);
    const [length, setLenght] = useState(null);
    const [width, setHWidth] = useState(null);

    const [deletedIds, setDeletedIds] = useState([]);

    useEffect(() => {
        try {
            axios.get(`http://localhost/api/users.php`)
                .then(res => {
                    setProductData(res.data.products);
                    setIsChecked(Array(res.data.products?.length).fill(false));
                })
        } catch (error) { throw error; }

    }, [])

    const delete_checkbox = async () => {
        try {
            axios.post(`http://localhost/api/deleteusers.php`, {
                productid: deletedIds,
            })
            setProductData(prevProducts => prevProducts.filter(product => !deletedIds?.includes(product.id)));
            setIsChecked(Array(productData?.length).fill(false));
        } catch (error) { throw error; }

    }

    const handlecheck = (id) => {
        setIsChecked(prev => {
            return prev.map((value, idx) => {
                if (id === idx)
                    return !value;
                return value;
            })
        });
        if (!deletedIds.includes(productData[id].id))
            setDeletedIds(prev => [...prev, productData[id].id]);
        else
            setDeletedIds(prev => prev.filter((item) => item !== productData[id].id))
    }

    useEffect(() => {
        if (height != null)
            setProductDesc("Dimension: " + height + "x" + width + "x" + length)
    }, [height, width, length]);

    const addProduct = async (e) => {
        if (height != null)
            setProductDesc("Dimension: " + height + "x" + width + "x" + length)

        const dataapi = { sku, name, price, productType, productDesc };
        try {
            e.preventDefault();
            await axios.post(`http://localhost/api/addusers.php`, {
                sku: dataapi.sku,
                name: dataapi.name,
                price: dataapi.price,
                productType: dataapi.productType,
                productDesc: dataapi.productDesc,
            })
                .then(res => {
                    window.location.href = '/';
                    return;
                })
        } catch (error) {
            toast.error('Sku is already taken write another one');
            //throw error;
        }
    }

    return (
        <Context.Provider
            value={{
                productData,
                isChecked,
                handlecheck,
                setSku,
                setName,
                setPrice,
                setProductType,
                productType,
                setProductDesc,
                productDesc,
                setHeight,
                setLenght,
                setHWidth,
                addProduct,
                delete_checkbox
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);