//import * as React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';
import React,{useState, useEffect} from "react";

//import openWeatherMapAPI from "./keys";
const openWeatherMapAPI = "880f9563f0dbc01b527c700210129732"
interface IAppStates {
    temperature: string | number | undefined,
    city: string | undefined,
    country: string | undefined,
    humidity: number | string | undefined,
    description: string | undefined,
    error: string | undefined
   
}

function Home (props: IAppStates){


    const [temperature,setTemperature] = useState(0);
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');
    const [humidity,setHumidity] = useState(0);
    const [description,setDescription] = useState('');
    const [error,setError] = useState('');

    const getWeather = async(e:any) =>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${openWeatherMapAPI}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        if (city && country && data.message !== "city not found") {
            setCity( data.name)
            setTemperature(data.main.temp)
            setCountry(data.sys.country)
            setHumidity(data.main.humidity)
            setDescription(data.weather[0].description)
            setError("")
           
        } else {
            setCity( "")
            setTemperature(0)
            setCountry("")
            setHumidity(0)
            setDescription("")
            setError("Please enter the values")
        }
    };

    /* useEffect( () => {       
       
        getWeather()
       
    }, [])  */
        return (
            <div>
                <Titles />
                <Form getWeather={getWeather}/>
                <Weather
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}

                    />
            </div>
        );
    }


export default Home;
