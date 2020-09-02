import React from "react";
import '../css/Header.scss';
import StarWars1 from '../img/400_242px-Star_Wars_Logo.png'
import StarWars2 from '../img/300_182px-Star_Wars_Logo.png'
import StarWars3 from '../img/Star_Wars_Logo._225x137.png'
import StarWarsLandscape1 from '../img/Star_Wars_Yellow_One_Line_Logo_257_24.png'

const Header = () => {
    let img = StarWarsLandscape1;
    let width = window.screen.width;
    let height = window.screen.height;  
    img = width >= 640 && height <= 360 ? StarWarsLandscape1 : img;
    img = width >= 823 && height >= 411 ? StarWarsLandscape1 : img;
    img = width >= 411 && height >= 720 ? StarWars3 : img;
    img = width >= 768 && height >= 1024 ? StarWars2 : img;
    img = width >= 1024 && height >= 1366 ? StarWars1 : img;

    return(
        <header>
            <div className="starWars">
                <img src={ img } />
            </div>
        </header>
    )
}

export default Header;