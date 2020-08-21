import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
 

const VehiclesDetails = (props) => {
    const {id} = useParams();
    const {path} = useRouteMatch();
    const category = path.substring(1,path.indexOf("/",1));
    const {array, buildDetails} = props;
    return <div className="detailsSection">{buildDetails(array, id, category)}</div>
}

export default VehiclesDetails