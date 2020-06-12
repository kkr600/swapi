import React from "react";
import "../css/Search.css";

const Search = props => {
    const {inputSearchValue, inputSearchChange, inputSearchVisible} = props;
    if (inputSearchVisible || (window.location.pathname != "/" && window.location.pathname != "/swapi")) 
        return <input
                type = "text"
                className = "search"
                placeholder = "Wyszukaj... (min. 3 znaki)"
                onChange = {inputSearchChange.bind(this)}
                value = {inputSearchValue}
            />
    else 
        return "";
}

export default Search;