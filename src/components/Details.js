import React from "react";

const Details = props => {
    
    console.log(props);

    let array = [];
    let key="";
    let properties = [];
    let table="";
    let detailsTitle ="";
    let detailsList = "";
    let detailSingle = "";

    if (props.selectedDetails != "" && props.selectedDetails != undefined) {

        key = props.selectedMenuItem == "films" ? "title" : "name";
        
        array = props.currentArray.filter(item => 
                item.name == props.selectedDetails
            )[0];
        
        Object.entries(props.currentArray[0]).forEach(([key,value])=> {
            if (key != "created" && key != "edited" && key != "url")
                properties.push(key)
        });
        let menuPositionsIndex = props.menuPositions.findIndex( el => el[key] == props.selectedMenuItem)
        
        detailsTitle = <span>{props.translate(props.menuPositions[menuPositionsIndex].single,props.dictionary)}: {props.selectedDetails}</span>
        
        console.log(array)

        detailsList = properties.map( (el,i) =>
            <li key={i}>
                <div className="flex detailsRow">
                    <div style={{"width": "300px"}}>{props.translate(el,props.dictionary)}: </div>
                    <div className="grow-1">{array[el]}</div>
                </div>
            </li> 
        )


        // table = properties.map((e,i)=>(
        //     // <tr key={i}><td>{props.translate(e,props.dictionary)}</td></tr>
        // ))
        
        // console.log(array)
        // table = array.map((properties,id) => (
        //     <li>properties</li>
            
        // ))
        // console.log(table)

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