import React from "react";  
import {Route, NavLink} from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListComponent from "./ListComponent"

import '../css/App.scss';
import "../css/List.scss";

const ListP = props => {

    const {sortObjects, translate, dictionary, menuPositions, inputSearchValue, inputSearchChange} = props;
    const {films, people, planets, species, starships, vehicles} = props;
 
    function buildList(array, path, inputSearchValue) {
        let arrayReturn = "";
        if (array !== undefined && path !== undefined && array.length > 0) {
            let arrayTemp = array;
            const key = path.substring(1) === "films" ? "title" : "name"
            
            arrayTemp = arrayTemp.sort(sortObjects(key));
 
            if (inputSearchValue.length > 2) {
                arrayReturn = arrayTemp.filter( element => (
                    element[key].toUpperCase().includes(inputSearchValue.toUpperCase()) || translate(element[key],dictionary).toUpperCase().includes(inputSearchValue.toUpperCase())
                ))
                arrayReturn = arrayReturn.map( element => (
                    <li key={element[key]}> 
                        <NavLink to={`${path}/${element[key]}`}>
                            {translate(element[key],dictionary)}
                        </NavLink>                      
                    </li>))
            }
            else {
                arrayReturn = array.map( (element) => (                    
                        <ListItem key={element[key]}>
                            <ListItemText>
                                <NavLink to={`${path}/${element[key]}`}>
                                    {translate(element[key],dictionary)}
                                </NavLink>   
                            </ListItemText>
                        </ListItem>
                    
                ));
            }
        }
        arrayReturn = <List>{arrayReturn}</List>
        return arrayReturn;
    }   

    return (
        <>
            <Route path="/films" component={() => {
                return (
                    <ListComponent 
                        array = {films} 
                        path = {menuPositions.filter(el => el.name === "films")[0].path}
                        buildList = {buildList} 
                        inputSearchValue = {inputSearchValue}
                        inputSearchChange = {inputSearchChange}
                    />)
            }} />
            <Route path="/people" component={() => {
                return (
                    <ListComponent 
                        array = {people} 
                        path = {menuPositions.filter(el => el.name === "people")[0].path}
                        buildList = {buildList} 
                        inputSearchValue = {inputSearchValue}
                        inputSearchChange = {inputSearchChange}
                    />)
            }} />
            <Route path="/planets" component={() => {
                return (
                    <ListComponent 
                        array = {planets} 
                        path = {menuPositions.filter(el => el.name === "planets")[0].path}
                        buildList = {buildList} 
                        inputSearchValue = {inputSearchValue}
                        inputSearchChange = {inputSearchChange}
                    />)
            }} />
            <Route path="/species" component={() => {
                return (
                    <ListComponent 
                        array = {species} 
                        path = {menuPositions.filter(el => el.name === "species")[0].path}
                        buildList = {buildList} 
                        inputSearchValue = {inputSearchValue}
                        inputSearchChange = {inputSearchChange}
                    />)
            }} />
            <Route path="/starships" component={() => {
                return (
                    <ListComponent 
                        array = {starships} 
                        path = {menuPositions.filter(el => el.name === "starships")[0].path}
                        buildList = {buildList} 
                        inputSearchValue = {inputSearchValue}
                        inputSearchChange = {inputSearchChange}
                    />)
            }} />
            <Route path="/vehicles" component={() => {
                return (
                    <ListComponent 
                        array = {vehicles} 
                        path = {menuPositions.filter(el => el.name === "vehicles")[0].path}
                        buildList = {buildList} 
                        inputSearchValue = {inputSearchValue}
                        inputSearchChange = {inputSearchChange}
                    />
                   )
            }} />
        </>
    )
}

export default ListP

