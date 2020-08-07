import * as React from "react";
import {Jumbotron, Container} from "react-bootstrap"

class Titles extends React.Component {
    render() {
        return (
           
            <Jumbotron fluid>
            <Container>
                <h1>Weather Map</h1>
                <p>
               Here you can find the daily temperature, humidity and other weather conditions
                </p>
            </Container>
            </Jumbotron>
        );
    }
};

export default Titles;