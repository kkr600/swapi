import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom'

import DetailsComponent from './DetailsComponent'

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
                    <DetailsComponent
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/films/:id" component={() => {
                return (
                    <DetailsComponent
                        array = {films}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/people" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/people/:id" component={() => {
                return (
                    <DetailsComponent
                        array = {people}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/planets" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/planets/:id" component={() => {
                return (
                    <DetailsComponent
                        array = {planets}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/species" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/species/:id" component={() => {
                return (
                    <DetailsComponent
                        array = {species}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/starships" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/starships/:id" component={() => {
                return (
                    <DetailsComponent
                        array = {starships}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/vehicles" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        buildDetails = {buildDetails}
                        scrollUp={scrollUp}
                    />
                )
            }}/>
            <Route path="/vehicles/:id" component={() => {
                return (
                    <DetailsComponent
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