import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Clock from "./components/clock";
import Date from "./components/date";
import Category from "./components/Category";
import MyAccount from "./components/MyAccount";
import Search from "./components/Search";
import SideMenu from "./components/sidemenu";
import newsApi from "./apis/newsApi";
import Weather from "./components/defaultWeather";
import News from "./components/News";
import Regions from "./components/Region";

import "bulma/css/bulma.css";


export default class App extends Component {


  state = {
    news: [],
    selectedRegion: "US",
    selectedCategory: "BreakingNews"
  };

  
  componentDidMount = () => {
    this.getfrmnewsAPI(this.state.selectedCategory);
  };



  getfrmnewsAPI = (categoryName) => {
    let reqURL = "";
    switch (categoryName) {
      case "BreakingNews":
        reqURL = `latest-news?country=${this.state.selectedRegion}&apiKey=${process.env.REACT_APP_CURRENTS_API_KEY}`;
      break;

      case "business":
      case "sports":
      case "technology":
      case "science":  
      case "health":
        reqURL = `latest-news?country=${this.state.selectedRegion}&category=${categoryName}&apiKey=${process.env.REACT_APP_CURRENTS_API_KEY}`
      break;

      case "movies":
        reqURL = `search?country=${this.state.selectedRegion}&keywords=${categoryName}&apiKey=${process.env.REACT_APP_CURRENTS_API_KEY}`;
      break;

      default:
        reqURL = `search?country=${this.state.selectedRegion}&keywords=${categoryName}&apiKey=${process.env.REACT_APP_CURRENTS_API_KEY}`;
    }

    newsApi
      .get(reqURL)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ news: response.data.news });
        }
      })
      .catch((error) => console.log(error));
  };

  getdatabyCategory = (e) => {
    e.preventDefault();
    let categoryName = e.target.getAttribute("href");
    this.setState({selectedCategory:categoryName }, () => {
      this.getfrmnewsAPI(categoryName);
    })
  };

  userSearch = (userSearchInput) => {
    this.getfrmnewsAPI(userSearchInput);
  };

  userRegion = (selRegion) => {
    // this.setState ({selectedRegion: selRegion })
    let categoryName = this.props;
    console.log(categoryName)
    this.setState({selectedRegion: selRegion}, () => {
      this.getfrmnewsAPI(this.state.selectedCategory);
    });
  }



  render() {
    return (
      <div>
        <div className="App-header">
          <div className="level">
            <div className="level-left app-name">CHANNEL MS NEWS</div>
            <div className="vl"></div>
            <div>
              <span className="short-app-name">CHANNEL MS NEWS</span>
            </div>
            <div className ="region">
              <Regions  userRegion = {this.userRegion}/>
            </div>
            <div className="weather">
              <Weather />
            </div>
            <div className="level-right clock">
              <Clock />
            </div>
            <div className="vl1"></div>
            <div className="smallClock">
              <Date />
            </div>
          </div>
        </div>
        <Search onSearchSubmit={this.userSearch} />
        <Switch>
          <Route exact path="/">
            <News news={this.state.news} />
          </Route>
          <Route
            path="/category/:CategoryName"
            render={(props) => <Category {...props} selectedRegion={this.state.selectedRegion} />}
          />
          <Route path="/myaccount" component={MyAccount} />
        </Switch>
        <div>
          <SideMenu newsCategory={this.getdatabyCategory} />
        </div>
      </div>
    );
  }
}
