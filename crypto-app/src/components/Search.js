import React, { useContext, useState, useCallback } from 'react';
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from '../context/CryptoContext';

const SearchInput = ({ handleInput, searchText }) => {
    return (
        <>
            <form className='w-96 relative flex items-center ml-7 font-nunito'>
                <input
                    type="text"
                    name="search"
                    value={searchText}
                    onChange={handleInput}
                    className='w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan'
                    placeholder='search here..'
                />
                <button type="submit" className='absolute right-1 cursor-pointer'>
                    <img src={searchIcon} className="w-full h-auto" alt="search" />
                </button>
            </form>
            {
                searchText.length > 0 &&
                <ul className='absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
                    {
                        searchData?
                        searchData.map(coin=>{return <li>{coin.id}</li>})
                    }
                </ul>
            }
        </>
    );
};

const Search = () => {
    const [searchText, setSearchText] = useState(""); // Correct useState syntax
    const { getSearchResult } = useContext(CryptoContext);

    // Debounce function to limit the rate at which getSearchResult is called
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    // Memoize the debounced function to avoid recreating it on each render
    const debouncedSearch = useCallback(
        debounce((query) => {
            getSearchResult(query);
        }, 2000),
        []
    );

    const handleInput = (e) => {
        const query = e.target.value;
        setSearchText(query); // Update state
        debouncedSearch(query);
    };

    return (
        <SearchInput handleInput={handleInput} searchText={searchText} />
    );
};

export default Search;
