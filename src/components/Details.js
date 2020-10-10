import React from "react";
import {Route, Switch } from 'react-router-dom'

import DetailsComponent from './DetailsComponent';

import '../css/style.scss';

const Details = props => {

    const { loaded } = props;

    return (
        <Switch>
            <Route path="/films" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/films/:id" component={() => {
                return (
                    <DetailsComponent
                        props = {props}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/people" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/people/:id" component={() => {
                return (
                    <DetailsComponent
                        props = {props}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/planets" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/planets/:id" component={() => {
                return (
                    <DetailsComponent
                        props = {props}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/species" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/species/:id" component={() => {
                return (
                    <DetailsComponent
                        props = {props}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/starships" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/starships/:id" component={() => {
                return (
                    <DetailsComponent
                        props = {props}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/vehicles" exact component={() => {
                return (
                    <DetailsComponent
                        array = {undefined}
                        loaded = {loaded}
                    />
                )
            }}/>
            <Route path="/vehicles/:id" component={() => {
                return (
                    <DetailsComponent
                        props = {props}
                        loaded = {loaded}
                    />
                )
            }}/>
        </Switch>
    )
}

export default Details