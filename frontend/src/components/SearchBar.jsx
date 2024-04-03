import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        let url = `http://localhost:8080/nutrition?criteria=${value}`
        fetch(url).then((response) => response.json()).then((json) => { setResults(json) });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    useEffect(() => handleChange(""), []);

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input
                placeholder='Type to search...'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar