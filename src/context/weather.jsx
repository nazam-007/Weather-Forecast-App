import { createContext, useContext,useState } from "react";
import {getWeatherDataForCity,getWeatherDataForLocation} from '../api/index'
const WeatherContext= createContext(null)



export const useWeather=()=>{
    return useContext(WeatherContext)
}

export const WeatherProvider=(props)=>{

        const [data,setData]=useState(null)
        const [searchCity,setSearchCity]=useState(null)

        const fetchData= async()=>{
            const responce=await getWeatherDataForCity(searchCity)
            setData(responce);
        }

        const fetchCurrentUserLocationData=()=>{

            navigator.geolocation.getCurrentPosition((position)=>{
                getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data ) => setData(data))
        
            })
        
        }

    return <WeatherContext.Provider value={{data,searchCity,setSearchCity,fetchData,fetchCurrentUserLocationData}}>{props.children}</WeatherContext.Provider>
}




