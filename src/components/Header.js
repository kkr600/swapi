import React from "react";
import '../css/Header.scss';
import StarWars1 from '../img/800px-Star_Wars_Logo.svg — kopia.png'
import StarWars2 from '../img/800px-Star_Wars_Logo.svg — kopia — kopia.png'

const Header = () => {
    return(
        <header>
            <div className="starWars">
                <img src={ window.screen.width <= 736 ? StarWars2 : StarWars1 } />
            </div>
        </header>
    )
}

export default Header;