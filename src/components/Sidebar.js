import React from "react";
import { Route, NavLink } from 'react-router-dom';
import { translate } from './dictionary'

import "../css/style.scss";
import "../css/w3.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faGlobe, faDna, faSpinner, faFighterJet, faSnowplow, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons';
library.add(faHome, faFilm, faGlobe, faDna, faSpinner, faRedditAlien, faFighterJet, faSnowplow, faStreetView);

const w3_open = () => {
  document.getElementById("mySidebar").style.display = "block";
  // document.getElementById("myOverlay").style.display = "block";
}
  
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  console.log('close')
  // document.getElementById("myOverlay").style.display = "none";
}

const Sidebar = props => {
  const { loaded, menuPositions } = props;
  const menu = menuPositions.map( (category,index) => (
      <li 
          key={index}
      >
          <NavLink 
              to={category.path} 
              exact={category.exact}
              onClick={w3_close}
          >
              <div className="icon">
                  {category.icon === '' ? '' : <FontAwesomeIcon icon={category.icon} />}
                  <span>{translate(category.name)}</span>
              </div>
          </NavLink>
      </li>
  ));

  return ( 
      <div id="mySidebar" className="w3-sidebar w3-bar-block w3-animate-left" >
          <button className="w3-bar-item w3-button w3-large" onClick={w3_close}>Zamknij &times;</button>
          <nav className="">
            <ul className="">
                {menu}
            </ul>
          </nav>

      </div>
  )
}

export { Sidebar, w3_open, w3_close }