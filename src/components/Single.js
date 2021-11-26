import React from "react";

function Single({dog, check}) {
    return (
        <div onClick = {check.bind(this, dog.name)} className = "single">
            <div className = "breed-name">{dog.name}</div>
            <img src = {dog.src} alt = "dog-breed"/>
        </div>
    )
}

export default Single;
