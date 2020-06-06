import React from "react";
import '../css/App.css';
import '../css/Details.css';

const Details = props => {

    let array = [];
    let key="";
    let properties = [];
    let detailsTitle ="";
    let detailsList = "";

    if (props.selectedDetails != "" && props.selectedDetails != undefined) {

        key = props.selectedMenuItem == "films" ? "title" : "name";

        array = props.currentArray.filter(item => 
                item[key] == props.selectedDetails
            )[0];
        
        Object.entries(props.currentArray[0]).forEach(([key,value])=> {
            if (key != "created" && key != "edited" && key != "url" && key != "opening_crawl")
                properties.push(key)
        });
        let menuPositionsIndex = props.menuPositions.findIndex( el => el["name"] == props.selectedMenuItem)
        
        detailsTitle = <span className="detailsTitle">{props.translate(props.menuPositions[menuPositionsIndex].single,props.dictionary)}: {props.selectedDetails}</span>

        detailsList = properties.map( (el,i) =>
                <div key={i} className="detailsWrap clearfix">
                    <div className="detailsName fl">{props.translate(el,props.dictionary)}: </div>
                    <div className="detailsProp fl">{props.getDetails(array[el],el,props.dictionary)}</div>
                </div>
        )

        detailsList = <div className="detailsSection clearfix">{detailsList}</div>

    }

    return (
        <React.Fragment>
            {detailsTitle}
                {detailsList}
        </React.Fragment>
    
    )
}




export default Details;