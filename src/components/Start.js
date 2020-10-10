import React from "react";  
import '../css/style.scss';

const Start = props =>{
    return (
        <div className = "start">
            <div className = "board">
                <p>Witaj na stronie poświęconej sadze Gwiezdnych Wojen.</p>
                <p>W menu znajdziesz informacje między innymi o bohaterach, planetach i pojazdach pojawiających się w częściach od I do VI.</p>
                <p>Aplikacja została wykonana w środowisku Create React App.</p>
            </div>
        </div>
    )
}

export default Start;