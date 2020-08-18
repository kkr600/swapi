import React from "react";
import {NavLink} from 'react-router-dom';

import '../css/Menu.scss';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faHome } from '@fortawesome/free-solid-svg-icons'

const Menu = props => {
    const {menuPositions, inputSearchSetVisible, startSetVisible, translate, dictionary} = props

    const menu = menuPositions.map( (category,index) => (
        <li 
            key={index}  
            onClick = {inputSearchSetVisible, startSetVisible.bind(this, category.exact)}
        >
            <NavLink 
                to={category.path} 
                exact={category.exact}
            >
                {translate(category.name,dictionary)} 
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