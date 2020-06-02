import React from "react";
import List from "./List"

const Menu = props => {
    
    const menu = props.categories.map( (cat,id) => (
        <li key={id}  onClick={()=>{props.onMenuClick(cat)}}>  {props.translate(cat,props.dictionary)} </li>
    ));

    return(
        <React.Fragment>
            <ul>
                {menu}
            </ul>
            <List selectedMenuItem={props.selectedMenuItem} currentArray={props[props.selectedMenuItem]}/>
        </React.Fragment>
    )

    


}


export default Menu;