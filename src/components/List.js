import React from "react";  
import '../css/App.css';
import "../css/List.css";

const List = props => {


    let array,key,arrayTemp;
    
    
    if (props.selectedMenuItem != "") {
        arrayTemp = props.currentArray;
        key = props.selectedMenuItem == "films" ? "title" : "name"
        arrayTemp = arrayTemp.sort(props.sortObjects(key));
        
    
        array = arrayTemp.map( (element,id) => (
            <li key={id} onClick={()=>props.onDetailsClick(element[key])}> {props.translate(element[key],props.dictionary)} </li>
        ));          
        
    }
    let listVisible = props.listVisible ? {"display": "block"} : {"display": "none"}

    return (
        <React.Fragment>
            <ul className="selectedList" style={listVisible}>
                {array}
            </ul>
        </React.Fragment>
    )


}

export default List;

