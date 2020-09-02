import React/*, {useState}*/ from "react";
import "../css/Search.scss";

const Search = props => {
    const {inputSearchValue, inputSearchChange, inputSearchVisible} = props;
    // const [ inputSearchValue, setInputSearchValue ] = useState("");

    const change = e => {
        inputSearchChange(e.target.value);
    }

    if (inputSearchVisible || (window.location.pathname != "/" && window.location.pathname != "/swapi" && window.location.pathname != "/start")) 
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