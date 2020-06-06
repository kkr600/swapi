import React from "react";  
import Search from "./Search"
import '../css/App.css';
import "../css/List.css";

const List = props => {


    let array,key,arrayTemp;
    
    
    if (props.selectedMenuItem != "") {
        arrayTemp = props.currentArray;
        key = props.selectedMenuItem == "films" ? "title" : "name"
        arrayTemp = arrayTemp.sort(props.sortObjects(key));
        
        if (props.inputSearchValue.length > 2){
            array = arrayTemp.filter( element => ( 
                element[key].toUpperCase().includes(props.inputSearchValue.toUpperCase()) || props.translate(element[key],props.dictionary).toUpperCase().includes(props.inputSearchValue.toUpperCase())
            ));
            console.log(array)
            array = array.map( (element,id) => (
                <li key={id} onClick={()=>props.onDetailsClick(element[key])}> {props.translate(element[key],props.dictionary)} </li>
            )); 
        }
        else {
            array = arrayTemp.map( (element,id) => (
                <li key={id} onClick={()=>props.onDetailsClick(element[key])}> {props.translate(element[key],props.dictionary)} </li>
            ));          
        }
    }
    let listVisible = props.listVisible ? {"display": "block"} : {"display": "none"}

    return (
        <React.Fragment>
            <div className="selectedList" style={listVisible}>
                <Search
                    inputSearchValue={props.inputSearchValue}
                    inputSearchChange={props.inputSearchChange}
                />
                <ul>
                    {array}
                </ul>
            </div>
        </React.Fragment>
    )


}

export default List;

