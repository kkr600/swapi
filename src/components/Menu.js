import React from "react";
import List from "./List";
import Details from "./Details"
import '../css/App.css';
import '../css/Menu.css';
// Object.entries(props.currentArray[0]).forEach(([key,value])=> {
//     if (key != "created" && key != "edited" && key != "url")
//         properties.push(key)
// });
const Menu = props => {
    const menu = props.menuPositions.map((cat,id) => (
        <li 
            key={id}  
            onClick={()=>{props.onMenuClick(cat.name)}}
            className={cat.selected ? "selected": null}
        >
                <a>
                    {props.translate(cat.name,props.dictionary)} 
                </a>
        </li>
    ));
    return(
        <React.Fragment>
            <nav>
                <ul className="mainMenu clearfix">
                    {menu}
                </ul>
            </nav>
            <div className="wrap clearfix">
                <section className="left fl">
                    <List 
                        selectedMenuItem={props.selectedMenuItem} 
                        currentArray={props[props.selectedMenuItem]}
                        onDetailsClick={props.onDetailsClick}
                        dictionary={props.dictionary}
                        translate={props.translate}
                        sortObjects={props.sortObjects}
                    />            
                </section>
                <section className="right fl">
                    <Details
                        selectedMenuItem={props.selectedMenuItem}
                        menuPositions={props.menuPositions}  
                        selectedDetails={props.selectedDetails}
                        currentArray={props[props.selectedMenuItem]}
                        dictionary={props.dictionary}
                        translate={props.translate}
                        getDetails={props.getDetails}
                        arrayToString={props.arrayToString}
                    />
                </section>
            </div>
        </React.Fragment>
    )

        


}


export default Menu;