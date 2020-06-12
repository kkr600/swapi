import React from "react";
import {NavLink} from 'react-router-dom';

import '../css/App.css';
import '../css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Menu = props => {
    const {inputSearchSetVisible, startSetVisible, translate, dictionary} = props
    const menu = props.menuPositions.map( cat => (
        <li 
            key={cat.name}  
            onClick = {inputSearchSetVisible, startSetVisible.bind(this, cat.exact)}
        >
            <NavLink 
                to={cat.path} 
                exact={cat.exact}
            >
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
                <div className="w3-modal">
                    <div className="w3-modal-content">
                        <p className="spinner"><FontAwesomeIcon icon={faSpinner} /></p>
                        Wczytuję dane...
                    </div>
                </div>
            )
    }

    return(
        <>
            <nav className="mainMenu">
                <ul className="clearfix">
                    {menu}
                </ul>
            </nav>
            {loaded()}
        </>
    )

}

export default Menu