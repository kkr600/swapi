import React from "react";  
import "../css/Search.css";

const Search = props => {
    return (
        <input
            type = "text"
            className = "search"
            placeholder = "Wyszukaj... (min. 3 znaki)"
            onChange = {props.inputSearchChange.bind(this)}
            value = {props.inputSearchValue}
        />
    )
}

export default Search;