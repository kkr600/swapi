import React/*, {useState}*/ from "react";
import "../css/Search.scss";

const Search = props => {
    const {inputSearchValue, inputSearchChange} = props;
    // const [ inputSearchValue, setInputSearchValue ] = useState("");

    const change = e => {
        inputSearchChange(e.target.value);
    }

    return <input
            type = "text"
            className = "search"
            placeholder = "Wyszukaj... (min. 3 znaki)"
            onChange = {inputSearchChange.bind(this)}
            value = {inputSearchValue}
        />
}

export default Search;