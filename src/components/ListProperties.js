import React from "react";  
import {Route, NavLink} from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { translate } from './dictionary'
import Search from './Search';

import ListComponent from "./ListComponent"

import '../css/style.scss';

const ListProperties = props => {

    const { menuPositions, inputSearchValue, inputSearchChange} = props;
    const { films, people, planets, species, starships, vehicles } = props;

    const sortObjects = key => {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))
            return 0;
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
    
          let comparison = 0;
          if (varA > varB)
            comparison = 1;
          else if (varA < varB) 
            comparison = -1;
          return comparison
        };
    }

    function buildList(array, path, inputSearchValue) {
        let arrayReturn = "";
        if (array !== undefined && path !== undefined && array.length > 0) {
            let arrayTemp = array;
            const key = path.substring(1) === "films" ? "title" : "name"
            
            arrayTemp = arrayTemp.sort(sortObjects(key));
 
            if (inputSearchValue.length > 2) {
                arrayReturn = arrayTemp.filter( element => (
                    element[key].toUpperCase().includes(inputSearchValue.toUpperCase()) || translate(element[key]).toUpperCase().includes(inputSearchValue.toUpperCase())
                ))
                arrayReturn = arrayReturn.map( element => (
                    <li key={element[key]}> 
                        <NavLink to={`${path}/${element[key]}`}>
                            {translate(element[key])}
                        </NavLink>                      
                    </li>))
            }
            else {
                arrayReturn = array.map( (element) => (                    
                        <ListItem key={element[key]}>
                            <ListItemText>
                                <NavLink to={`${path}/${element[key]}`}>
                                    {translate(element[key])}
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
                    <>
                        <Search 
                            inputSearchValue={inputSearchValue}
                            inputSearchChange={inputSearchChange} 
                        />
                        <ListComponent 
                            array = {films} 
                            path = {menuPositions.filter(el => el.name === "films")[0].path}
                            buildList = {buildList} 
                            inputSearchValue = {inputSearchValue}
                            inputSearchChange = {inputSearchChange}
                        />
                    </>
                )
            }} />
            <Route path="/people" component={() => {
                return (
                    <>
                        <Search 
                            inputSearchValue={inputSearchValue}
                            inputSearchChange={inputSearchChange} 
                        />
                        <ListComponent 
                            array = {people} 
                            path = {menuPositions.filter(el => el.name === "people")[0].path}
                            buildList = {buildList} 
                            inputSearchValue = {inputSearchValue}
                            inputSearchChange = {inputSearchChange}
                        />
                    </>
                )
            }} />
            <Route path="/planets" component={() => {
                return (
                    <>
                        <Search 
                            inputSearchValue={inputSearchValue}
                            inputSearchChange={inputSearchChange} 
                        />
                        <ListComponent 
                            array = {planets} 
                            path = {menuPositions.filter(el => el.name === "planets")[0].path}
                            buildList = {buildList} 
                            inputSearchValue = {inputSearchValue}
                            inputSearchChange = {inputSearchChange}
                        />
                    </>
                )
            }} />
            <Route path="/species" component={() => {
                return (
                    <>
                        <Search 
                            inputSearchValue={inputSearchValue}
                            inputSearchChange={inputSearchChange} 
                        />
                        <ListComponent 
                            array = {species} 
                            path = {menuPositions.filter(el => el.name === "species")[0].path}
                            buildList = {buildList} 
                            inputSearchValue = {inputSearchValue}
                            inputSearchChange = {inputSearchChange}
                        />
                    </>
                )
            }} />
            <Route path="/starships" component={() => {
                return (
                    <>
                        <Search 
                            inputSearchValue={inputSearchValue}
                            inputSearchChange={inputSearchChange} 
                        />
                        <ListComponent 
                            array = {starships} 
                            path = {menuPositions.filter(el => el.name === "starships")[0].path}
                            buildList = {buildList} 
                            inputSearchValue = {inputSearchValue}
                            inputSearchChange = {inputSearchChange}
                        />
                    </>
                )
            }} />
            <Route path="/vehicles" component={() => {
                return (
                    <>
                        <Search 
                            inputSearchValue={inputSearchValue}
                            inputSearchChange={inputSearchChange} 
                        />
                        <ListComponent 
                            array = {vehicles} 
                            path = {menuPositions.filter(el => el.name === "vehicles")[0].path}
                            buildList = {buildList} 
                            inputSearchValue = {inputSearchValue}
                            inputSearchChange = {inputSearchChange}
                        />
                    </>
                   )
            }} />
        </>
    )
}

export default ListProperties

