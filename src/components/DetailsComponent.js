import React from 'react'
import { useParams, useRouteMatch, Redirect, NavLink } from 'react-router-dom'
import { translate } from './dictionary';

let detailsTitle ="";
let detailsList = "";



function buildDetails(array, id, category) {
    let properties = [];
    if (id !== undefined) {
      const key = category === "films" ? "title" : "name";
      let arrayTemp = array.props[category].filter( item => item[key] === id)[0];
      if (arrayTemp !== undefined) {
          Object.entries(arrayTemp).forEach(([key]) => {
              if (key !== "created" && key !== "edited" && key !== "url" && key !== "opening_crawl")
              properties.push(key)
          });
      }
      else 
          return <Redirect to= "/" />               
      detailsTitle = translate(id);
      detailsList = properties.map( el =>
          <div key={(el)} className="detailsWrap">
              <div className="detailsName">{translate(el)}: </div>
              <div className="detailsProp">{getDetails(arrayTemp[el],el, array)}</div>
          </div>
      )
      return (
          <div>
              <p className="detailsTitle">{detailsTitle}</p>
              {detailsList}
          </div>
      )
    }
    else {
        return (
            <div>
                <p className="detailsTitle">Wybierz pozycję</p>
            </div>
        )            
    }
}

const getDetails = (value, property, array) => {
      if (array.loaded.films && array.loaded.people && array.loaded.planets && array.loaded.species && array.loaded.starships && array.loaded.vehicles) {
      let key = property === "films" ? "title" : "name"
      property = property === "characters" ? "people": property;
      property = property === "residents" ? "people" : property;
      property = property === "pilots" ? "people" : property;
      property = property === "homeworld" ? "planets" : property;
      if (value === null)
        return "Brak";
      if (typeof value == "number")
        return value.toString();
      if (typeof value === "object" && value.length === 0) {
        return "Brak";
      } 
      
      if (typeof value[0] === "string" && value[0].indexOf("http://") !== -1) {
        
        let filteredValue = array.props[property].filter( element => element.url === value[0] )[0][key]; 
        return filteredValue === "Brak danych" ? "Brak danych" : <NavLink to={`/${property}/${filteredValue}`}>{translate(filteredValue)}</NavLink>
      }
      if (typeof value === "string" && value.indexOf("http://") !== -1) {
        
        let filteredValue = array.props[property].filter( element => element.url === value )[0][key]; 
        return filteredValue === "Brak danych" ? "Brak danych" : <NavLink to={`/${property}/${filteredValue}`}>{translate(filteredValue)}</NavLink>
      }
      if (typeof value === "string" && value.indexOf("http://") === -1) {
        return translate(value);
      }
      else {
        return translate(value);
      }
    } 
  }

const DetailsComponent = (props) => {
    const {id} = useParams();
    const {path} = useRouteMatch();
    const category = path.substring(1,path.indexOf("/",1));
    return <div className="detailsSection">{buildDetails(props, id, category)}</div>
}

export default DetailsComponent