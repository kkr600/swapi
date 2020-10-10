import React from "react";
import { Route, NavLink } from 'react-router-dom';
import Start from './Start';
import { translate } from './dictionary'

import '../css/style.scss';
import '../css/w3.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faGlobe, faDna, faSpinner, faFighterJet, faSnowplow, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons';
library.add(faHome, faFilm, faGlobe, faDna, faSpinner, faRedditAlien, faFighterJet, faSnowplow, faStreetView);

const Menu = props => {
    const { loaded, menuPositions } = props;
    const menu = menuPositions.map( (category,index) => (
        <li 
            key={index}
        >
            <NavLink 
                to={category.path} 
                exact={category.exact}
            >
                <div className="icon">
                    {category.icon === '' ? '' : <FontAwesomeIcon icon={category.icon} />}
                    <span>{translate(category.name)}</span>
                </div>
            </NavLink>
        </li>
    ));
    
    const ifLoaded = () => {
        
        let sum = loaded.films + loaded.people + loaded.planets + loaded.starships + loaded.vehicles

        if (loaded.films && loaded.people && loaded.planets && loaded.starships && loaded.vehicles)  {
            return <></>
        }
        else
            return (
                <div className="w3-modal soSelect">
                    <div className="w3-modal-content">
                        <p className="spinner"><FontAwesomeIcon icon={faSpinner} /></p>
                        <span>Wczytuję dane... {sum} / 5</span>
                    </div>
                </div>
            )
    }

    return(
        <div className="mainMenuDiv">
            <Route path="/" exact component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                        <Start />
                </div>
                )
            }} />
            <Route path="/swapi" exact component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                        <Start />
                </div>
                )
            }} />
            <Route path="/start" exact component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                        <Start />
                </div>
                )
            }} />
            <Route path="/films" component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                </div>
                )
            }} />
            <Route path="/people" component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                </div>
                )
            }} />            
            <Route path="/planets" component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                </div>
                )
            }} />
            <Route path="/species" component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                </div>
                )
            }} />
            <Route path="/starships" component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                </div>
                )
            }} />
            <Route path="/vehicles" component={() => {
                return (
                    <div>
                        <nav className="mainMenu">
                            <ul className="">
                                {menu}
                            </ul>
                        </nav>
                        {ifLoaded()}
                </div>
                )
            }} />
        </div>
    )

}

export default Menu