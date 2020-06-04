import React from "react";

const Details = props => {
    
    // console.log(props);

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
        
        console.log(array)
        
        detailsTitle = <span>{props.translate(props.menuPositions[menuPositionsIndex].single,props.dictionary)}: {props.selectedDetails}</span>

        console.log(detailsTitle)

        detailsList = properties.map( (el,i) =>
            <li key={i}>
                <div className="flex detailsRow">
                    <div style={{"width": "300px"}}>{props.translate(el,props.dictionary)}: </div>
                    <div>{props.getDetails(props.translate(props.arrayToString(array[el],el,props.dictionary),props.dictionary),el)}</div>
                </div>
            </li> 
        )

    }

    

    return (
        <React.Fragment>
            {detailsTitle}
            <ul>
                {detailsList}
            </ul>
        </React.Fragment>
    )
}




export default Details;