import * as React from "react";
import './Weather.css';

interface IWeatherProps {
    temperature: number | undefined,
    city: string | undefined,
    country: string | undefined,
    humidity: number | undefined,
    description: string | undefined,
    error: string | undefined
}

interface IWeatherStates {

}

class Weather extends React.Component<IWeatherProps, IWeatherStates> {
    constructor(props: IWeatherProps) {
        super(props);
    }
    render() {
        return (

<div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-lg-8 grid-margin stretch-card">
              
                <div className="card card-weather">
                    <div className="card-body">
                        <div className="weather-date-location">
                            
                            <p className="text-gray"> <span className="weather-location">{this.props.city}, {this.props.country}</span> </p>
                        </div>                        
                        <div className="weather-data d-flex">
                            <div className="mr-auto">
                                <h4 className="display-3">{this.props.temperature} <span className="symbol"> °</span>C</h4>
                                <p> {this.props.description} </p>
                                <p>Humidity {this.props.humidity} </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</div>




          
        );
    }
};

export default Weather;

  {/* <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.error && <p>Error: {this.props.error} for city: {this.props.city} and country: {this.props.country}</p>}
            </div> */}