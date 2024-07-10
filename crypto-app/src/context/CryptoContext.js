import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [coinSearch, setCoinSearch] = useState("");
    const [currency,setCurrency]=useState("usd");

    const getCoinData = async () => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
            ).then(res => res.json());
            console.log(data);
            setCryptoData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getCryptoData = async () => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
            ).then(res => res.json());
            console.log(data);
            setCryptoData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getSearchResult = async (query) => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/search?query=${query}`
            ).then(res => res.json());
            console.log(data);
            setSearchData(data.coins);
        } catch (error) {
            console.log(error);
        }
    };

    useLayoutEffect(() => {
        if (coinSearch) {
            getCoinData();
        } else {
            getCryptoData();
        }
    }, [coinSearch, currency]);

    return (
        <CryptoContext.Provider value={{ cryptoData, searchData, getSearchResult, setCoinSearch ,setSearchData, currency,setCurrency}}>
            {children}
        </CryptoContext.Provider>
    );
};
