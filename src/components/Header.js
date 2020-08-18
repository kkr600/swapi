import React from "react";
import '../css/Header.scss';
import StarWars from '../img/800px-Star_Wars_Logo.svg — kopia.png'

const Header = () => {
    return(
        <header>
            {/* <div class="fade"></div> */}
            <div className="starWars">
                <img src={StarWars} />
                {/* <div className="crawl">
                    <div className="title">
                        <p>dzień dobry</p>
                        <h1>kłaniam się nisko</h1>
                    </div>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>    */}
            </div>
        </header>
    )
}

export default Header;