import React from "react";
import '../css/style.scss';
import StarWars1 from '../img/480_290px-Star_Wars_Logo.png'
import StarWars2 from '../img/300_182px-Star_Wars_Logo.png'
import StarWars3 from '../img/Star_Wars_Logo._225x137.png'
import StarWars4 from '../img/800_483px-Star_Wars_Logo.png'
import StarWarsLandscape1 from '../img/Star_Wars_Yellow_One_Line_Logo_257_24.png'
import { w3_open } from '../components/Sidebar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
library.add(faHamburger);


const Header = () => {
    let img = StarWarsLandscape1;
    let width = window.screen.width;
    let height = window.screen.height;  
    // img = width = 411 ? StarWars2 : img;
    // img = width >= 823 && height >= 411 ? StarWarsLandscape1 : img;
    // img = width >= 411 && height >= 720 ? StarWars3 : img;
    // img = width >= 768 && height >= 1024 ? StarWars2 : img;
    // img = width >= 1024 && height >= 768 ? StarWars2 : img;
    // img = width >= 1366 && height >= 1024 ? StarWars1 : img;
    // img = width > 1024 ? StarWars2 :
    console.log(`width: ${width}`)
    return(
        <header>
            <div className="starWars">
                <img src={ img } />
                <FontAwesomeIcon icon={ 'hamburger' } onClick={w3_open}/>
            </div>
        </header>
    )
}

export default Header;