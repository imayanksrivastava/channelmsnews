import React, { Component } from "react";
import weatherApi from "../apis/weatherApi";

export default class App extends Component {
  
  state = {
    defaultweather: [],
    location: ''
  };

  componentDidMount = () => {
    weatherApi
      .get(
        `data/2.5/weather?q=Netherlands&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        if (response.status === 200) {
          this.setState({ 
            defaultweather: response.data.main,
            location: response.data.name
          });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <p>{this.state.location} {this.state.defaultweather.temp}<span>&#176;</span>C</p>
      </div>
    )}
  }