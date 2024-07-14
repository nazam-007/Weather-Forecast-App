import React from "react";

const Button=(props)=>{
    return (
        <div className="search-box" onClick={props.onClick}>
            <button>{props.value}</button>
        </div>
    )

}

export default Button