import React from "react";
import {NavLink} from 'react-router-dom';

import '../css/App.css';
import '../css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Menu = props => {
    const menu = props.menuPositions.map( cat => (
        <li 
            key={cat.name}  
        >
            <NavLink to={cat.path} >
                {props.translate(cat.name,props.dictionary)} 
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