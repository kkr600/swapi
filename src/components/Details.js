import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom'

import FilmsDetails from "../Details/FilmsDetails"
import PeopleDetails from "../Details/PeopleDetails"
import PlanetsDetails from "../Details/PlanetsDetails"
import SpeciesDetails from "../Details/SpeciesDetails"
import StarshipsDetails from "../Details/StarshipsDetails"
import VehiclesDetails from "../Details/VehiclesDetails"

import '../css/App.scss';
import '../css/Details.scss';

const Details = props => {

    const {translate, dictionary, getDetails, scrollUp} = props;
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
            else 
                return <Redirect to= "/" />                 
            
            detailsTitle = translate(id,dictionary);
            detailsList = properties.map( el =>
                <div key={(el)} className="detailsWrap">
                    <div className="detailsName">{translate(el,dictionary)}: </div>
                    <div className="detailsProp">{getDetails(arrayTemp[el],el,dictionary)}</div>
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

    return (
        <Switch>
            <Route path="/films" exact component={() => {
                return (
                    <FilmsDetails
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/films/:id" component={() => {
                return (
                    <FilmsDetails
                        array = {films}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/people" exact component={() => {
                return (
                    <PeopleDetails
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/people/:id" component={() => {
                return (
                    <PeopleDetails
                        array = {people}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/planets" exact component={() => {
                return (
                    <PlanetsDetails
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/planets/:id" component={() => {
                return (
                    <PlanetsDetails
                        array = {planets}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/species" exact component={() => {
                return (
                    <SpeciesDetails
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/species/:id" component={() => {
                return (
                    <SpeciesDetails
                        array = {species}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/starships" exact component={() => {
                return (
                    <StarshipsDetails
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/starships/:id" component={() => {
                return (
                    <StarshipsDetails
                        array = {starships}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/vehicles" exact component={() => {
                return (
                    <VehiclesDetails
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/vehicles/:id" component={() => {
                return (
                    <VehiclesDetails
                        array = {vehicles}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
        </Switch>
    )
}

export default Details