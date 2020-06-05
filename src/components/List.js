import React from "react";  
import "../css/List.css";

const List = props => {


    let array,key,arrayTemp;
    
    
    if (props.selectedMenuItem != "") {
        arrayTemp = props.currentArray;
        key = props.selectedMenuItem == "films" ? "title" : "name"
        // console.log("props.selectedMenuItem",props.selectedMenuItem)
        // console.log("key",key)
        arrayTemp = arrayTemp.sort(props.sortObjects(key));
        
        array = arrayTemp.map( (element,id) => (
            <li key={id} onClick={()=>props.onDetailsClick(element[key])}> {props.translate(element[key],props.dictionary)} </li>
        ));
    }
    


    return (
        <React.Fragment>
            <ul className="selectedList">
                {array}
            </ul>
        </React.Fragment>
    )


}

export default List;

