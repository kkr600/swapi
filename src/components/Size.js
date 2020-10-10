import React from "react";  


const Size = () => {
    let w = window.screen.width;
    let h = window.screen.height;
    return (
        <div className="size"><span>{w} : {h} 1.2</span></div>
    )
}

export default Size