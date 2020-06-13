import React from "react";
import {NavLink} from 'react-router-dom';

import '../css/Menu.css';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faHome } from '@fortawesome/free-solid-svg-icons'

const Menu = props => {
    const {menuPositions, inputSearchSetVisible, startSetVisible, translate, dictionary} = props

    const menu = menuPositions.map( cat => (
        <li 
            key={cat.name}  
            onClick = {inputSearchSetVisible, startSetVisible.bind(this, cat.exact)}
        >
            <NavLink 
                to={cat.path} 
                exact={cat.exact}
            >
                {/* <FontAwesomeIcon icon={cat.icon} /> {translate(cat.name,dictionary)}  */}
                {translate(cat.name,dictionary)} 
            </NavLink>
        </li>
    ));
    
    const loaded = () => {
        const {loaded_films, loaded_people, loaded_planets, loaded_species, loaded_starships, loaded_vehicles} = props;
        if (loaded_films && loaded_people && loaded_planets && loaded_species && loaded_starships && loaded_vehicles)  {
            return <div></div>
        }
        else
            return (
                <div className="w3-modal soSelect">
                    <div className="w3-modal-content">
                        <p className="spinner"><FontAwesomeIcon icon={faSpinner} /></p>
                        Wczytuję dane...
                    </div>
                </div>
            )
    }

    return(
        <div>
            <nav className="mainMenu noStick">
                <ul className="clearfix s">
                    {menu}
                </ul>
            </nav>
            {loaded()}
        </div>
    )

}

export default Menu