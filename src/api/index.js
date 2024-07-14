const baseURl="https://api.weatherapi.com/v1/current.json?key=ad22dbc30b4c440489a103405241207";

export const getWeatherDataForCity= async (city)=>{

    const responce=await fetch(`${baseURl}&q=${city}&aqi=yes`)
    return await responce.json();
}

export const getWeatherDataForLocation= async (lat,lon)=>{

    const responce=await fetch(`${baseURl}&q=${lat},${lon}&aqi=yes`)
    return await responce.json();
}