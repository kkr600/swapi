import React from "react";  
import '../css/Start.css';
import '../css/App.css';

const Start = props =>{
    let {startVisible} = props;
    if (startVisible) 
        return (
            <div className = "start noSelect">
                <h1>Strona główna</h1>
                <p>Witaj na stronie poświęconej sadze Gwiezdnych Wojen.</p>
                <p>W menu znajdziesz informacje między innymi o bohaterach, planetach i pojazdach pojawiających się w częściach od I do VI.</p>
            </div>
        )
    else 
     



        return ""
}

export default Start;