import { useEffect } from 'react'
import Card from './components/card'
import Input from './components/input'
import Button from './components/button'
import { useWeather } from './context/weather'

import './App.css'

function App() {
  
const weather=useWeather();

useEffect(()=>{
  weather.fetchCurrentUserLocationData()
},[])

  return (
    <>
      <h2>Weather Forcast App</h2>
      <Input/>
      <Button onClick={weather.fetchData} value="search"/>
      <Card/>
      
    </>
  )
}

export default App
