import * as React from "react";
import { Link } from "react-router-dom";


interface IFormComponentProps {
    getWeather: (e: any) => Promise<any>
}

interface IFormComponentStates {
}

class Form extends React.Component<IFormComponentProps, IFormComponentStates> {
    constructor(props: IFormComponentProps) {
        super (props);
    }
    
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City.."/>
                <input type="text" name="country" placeholder="Country.."/>
                <button > Get Weather </button>
            </form>
        );
    }
}

export default Form;