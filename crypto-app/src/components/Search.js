import React, { useState } from 'react';
import searchIcon from "../assets/search-icon.svg";

const Search = () => {
    const [searchText, setSearchText] = useState(""); // Correct useState syntax

    const handleInput = (e) => {
        e.preventDefault();
        const query = e.target.value;
        setSearchText(query); // Update state
        console.log(query);
    }

    return (
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
    )
}

export default Search;
