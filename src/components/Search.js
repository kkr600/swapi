
import React from "react";  
import "../css/Search.css";

const Search = props => {




    return (

        <input
            placeholder="Wyszukaj... (min. 3 znaki)"
            onChange={props.inputSearchChange}
            // value={props.inputSearchValue}
        />

    ) 

}

export default Search;