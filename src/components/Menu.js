import React from "react";
import {NavLink} from 'react-router-dom';

import '../css/Menu.scss';
import '../css/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faGlobe, faDna, faSpinner, faFighterJet, faSnowplow, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons';
library.add(faHome, faFilm, faGlobe, faDna, faSpinner, faRedditAlien, faFighterJet, faSnowplow, faStreetView);

const Menu = props => {
    const { loaded, menuPositions, inputSearchSetVisible, startSetVisible, translate, dictionary } = props;
    
    const menu = menuPositions.map( (category,index) => (
        <li 
            key={index}
            onClick = {inputSearchSetVisible, startSetVisible.bind(this, category.exact)}
        >
            <NavLink 
                to={category.path} 
                exact={category.exact}
            >   
                <div className="icon">
                    {category.icon === '' ? '' : <FontAwesomeIcon icon={category.icon} />}
                    <span>{translate(category.name,dictionary)}</span>
                </div>
            </NavLink>
        </li>
    ));
    
    const ifLoaded = () => {
        if (loaded.films && loaded.people && loaded.planets && loaded.starships && loaded.vehicles)  {
            return <div></div>
        }
        else
            return (
                <div className="w3-modal soSelect">
                    <div className="w3-modal-content">
                        <p className="spinner"><FontAwesomeIcon icon={faSpinner} /></p>
                        <span>Wczytuję dane...</span>
                    </div>
                </div>
            )
    }

    return(
        <div>
            <nav className="mainMenu">
                <ul className="">
                    {menu}
                </ul>
            </nav>
            {ifLoaded()}
        </div>
    )

}

export default Menu