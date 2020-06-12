import React from "react";  

const Start = props =>{
    let {startVisible} = props;

    return startVisible ? <p>Strona główna</p> : "";

}

export default Start;