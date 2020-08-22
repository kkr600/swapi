import React from "react";
import '../css/Header.scss';
import StarWars from '../img/800px-Star_Wars_Logo.svg — kopia.png'

const Header = () => {
    return(
        <header>
            <div className="starWars">
                <img src={StarWars} />
            </div>
        </header>
    )
}

export default Header;