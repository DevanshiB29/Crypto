import React, { useContext, useState, useCallback } from 'react';
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from '../context/CryptoContext';

const SearchInput = ({ handleInput, searchText, setSearchText, handleSearch }) => {
    const { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

    const selectCoin = (coin) => {
        setCoinSearch(coin);
        setSearchText("");
        setSearchData([]);
    };

    return (
        <>
            <form className='w-96 relative flex items-center ml-7 font-nunito' onSubmit={handleSearch}>
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
            {searchText.length > 0 && (
                <ul className='absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
                    {searchData.length > 0 ? (
                        searchData.map(coin => (
                            <li
                                className='flex items-center ml-4 my-2 cursor-pointer'
                                key={coin.id}
                                onClick={() => selectCoin(coin.id)}
                            >
                                <img className="w-[1rem] h-[1.2rem] mx-1.5" src={coin.thumb} alt={coin.name} />
                                <span>{coin.name}</span>
                            </li>
                        ))
                    ) : (
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin' role="status" />
                            <span className='ml-2'>Searching...</span>
                        </div>
                    )}
                </ul>
            )}
        </>
    );
};

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const { getSearchResult } = useContext(CryptoContext);

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const debouncedSearch = useCallback(
        debounce((query) => {
            getSearchResult(query);
        }, 2000),
        [getSearchResult]
    );

    const handleInput = (e) => {
        const query = e.target.value;
        setSearchText(query);
        debouncedSearch(query);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        getSearchResult(searchText);
    };

    return (
        <div className='relative'>
            <SearchInput handleInput={handleInput} searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
        </div>
    );
};

export default Search;
