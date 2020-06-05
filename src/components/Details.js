import React from "react";
import ReactTable from "react-table";
import '../css/Details.css';

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
        
        // console.log(array)
        
        detailsTitle = <span className="detailsTitle">{props.translate(props.menuPositions[menuPositionsIndex].single,props.dictionary)}: {props.selectedDetails}</span>

        detailsList = properties.map( (el,i) =>
            // <li key={i}>
                <div key={i} className="detailsWrap">
                    <div className="detailsName fl">{props.translate(el,props.dictionary)}: </div>
                    {/* <div className="detailsProp fl">{props.getDetails(props.translate(props.arrayToString(array[el],el,props.dictionary),props.dictionary),el)}</div> */}
                    {/* <div className="detailsProp fl">{props.getDetails(props.arrayToString(array[el],el,props.dictionary),el)}</div> */}
                    <div className="detailsProp fl">{props.getDetails(array[el],el)}</div>
                </div>
            // </li> 
        )

    }

    // const columns = [{  
    //     Header: 'Name',  
    //     accessor: 'name'  
    //    },{  
    //    Header: 'Age',  
    //    accessor: 'age'  
    //    }]  
    // const data = [{  
    //     name: 'Ayaan',  
    //     age: 26  
    //     }]

    return (
        <React.Fragment>
            {detailsTitle}
            {/* <ul> */}
                {detailsList}
            {/* </ul> */}
        </React.Fragment>
        // <ReactTable
        //     data={data}  
        //     columns={columns}
        // />
    )
}




export default Details;