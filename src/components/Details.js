import React from "react";
import {Route, Switch} from 'react-router-dom'
import FilmsDetails from "../Details/FilmsDetails"
import PeopleDetails from "../Details/PeopleDetails"
import PlanetsDetails from "../Details/PlanetsDetails"
import SpeciesDetails from "../Details/SpeciesDetails"
import StarshipsDetails from "../Details/StarshipsDetails"
import VehiclesDetails from "../Details/VehiclesDetails"

import '../css/App.css';
import '../css/Details.css';

const Details = props => {

    const {translate, dictionary, getDetails} = props;
    const {films, people, planets, species, starships, vehicles} = props;

    let detailsTitle ="";
    let detailsList = "";

    function buildDetails(array, id, category) {
        let properties = [];
        const key = category === "films" ? "title" : "name";
        if (array !== undefined && array.length > 0) {
            let arrayTemp = array.filter( item => item[key] === id)[0];
            if (arrayTemp !== undefined) {
                Object.entries(arrayTemp).forEach(([key]) => {
                    if (key !== "created" && key !== "edited" && key !== "url" && key !== "opening_crawl")
                    properties.push(key)
                });
            }
            detailsTitle = translate(id,dictionary);
            detailsList = properties.map( el =>
                <div key={(el)} className="detailsWrap clearfix">
                    <div className="detailsName fl">{translate(el,dictionary)}: </div>
                    <div className="detailsProp fl">{getDetails(arrayTemp[el],el,dictionary)}</div>
                </div>
            )
            return (
                <div>
                    <p>{detailsTitle}</p>
                    {detailsList}
                </div>
            )
        }
    }

    return (
        <>
            <Switch>
                <Route path="/films/:id" component={() => {
                    return (
                        <FilmsDetails
                            array = {films}
                            buildDetails = {buildDetails}
                        />
                    )
                }}/>
                <Route path="/people/:id" component={() => {
                    return (
                        <PeopleDetails
                            array = {people}
                            buildDetails = {buildDetails}
                        />
                    )
                }}/>
                <Route path="/planets/:id" component={() => {
                    return (
                        <PlanetsDetails
                            array = {planets}
                            buildDetails = {buildDetails}
                        />
                    )
                }}/>
                <Route path="/species/:id" component={() => {
                    return (
                        <SpeciesDetails
                            array = {species}
                            buildDetails = {buildDetails}
                        />
                    )
                }}/>
                <Route path="/starships/:id" component={() => {
                    return (
                        <StarshipsDetails
                            array = {starships}
                            buildDetails = {buildDetails}
                        />
                    )
                }}/>
                <Route path="/vehicles/:id" component={() => {
                    return (
                        <VehiclesDetails
                            array = {vehicles}
                            buildDetails = {buildDetails}
                        />
                    )
                }}/>
            </Switch>
        </>
    )
}

export default Details