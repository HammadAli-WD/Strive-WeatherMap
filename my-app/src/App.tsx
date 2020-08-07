import * as React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
//import openWeatherMapAPI from "./keys";
const openWeatherMapAPI = "880f9563f0dbc01b527c700210129732"
interface IAppStates {
    temperature: number | undefined,
    city: string | undefined,
    country: string | undefined,
    humidity: number | undefined,
    description: string | undefined,
    error: string | undefined
}

class App extends React.Component<{}, IAppStates> {

    constructor(props: any) {
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }
        this.getWeather = this.getWeather.bind(this);    
    }

    private async getWeather(e:any) {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${openWeatherMapAPI}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        if (city && country && data.message !== "city not found") {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please, enter the values."
            });
        }
    }

    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}

                    />
            </div>
        );
    }
}

export default App;
