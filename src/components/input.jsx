import React from "react";
import { useWeather } from "../context/weather";
import Button from "./button";

const Input=()=>{

    const weather=useWeather();

    return (
        
        <div className="search-box">
            
            <input  placeholder="Search City Name"  value={weather.searchCity} onChange={(e)=>weather.setSearchCity(e.target.value)} 
            />
        </div>
        
        
    )
}

export default Input;