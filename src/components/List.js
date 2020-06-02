import React from "react";

const List = props => {


    let array,key;

    if (props.selectedMenuItem != "") {
        key = props.selectedMenuItem == "films" ? "title" : "name"
        array = props.currentArray.map( (element,id) => (
            <li key={id}> {element[key]} </li>
        ))    
    }
    

    return (
        <React.Fragment>
            <h1>
                {array}
            </h1>
        </React.Fragment>
    )


}

export default List

