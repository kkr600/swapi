import React from 'react'
import "../css/List.css";

const Planets = props => {
    const {array, inputSearchValue, path} = props;
    return (
        <>
            <div className="selectedList">
                {props.buildList(array,path,inputSearchValue)}
            </div>
        </>
    )
}

export default Planets