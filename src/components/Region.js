import React from "react";
import newsApi from "../apis/newsApi";

export default class Region extends React.Component {
  state = {
    regions: [],
  };
  componentDidMount = () => {
    newsApi
      .get(
        `available/regions?apiKey=UUHD9_vdN_hGwCKvpDNsGIzoU0uuET-BvAq2px1h5LjCcUiq`
      )
      .then((response) => {

        if (response.status === 200) {
          this.setState({ regions: response.data.regions });
        }
      })
      .catch((error) => console.log(error));
  };

  
  onSelectChange = event => {
    var region = document.getElementById("region").value;
    console.log(region);
    this.props.userRegion(region)
  };

  render() {
    var regions = this.state.regions;
    var regionsList = Object.keys(regions).sort().map(function (key) {
      if (key ==='US'){
        
      }
      return <option
        key= {key} value={regions[key]}>{key}
      </option>;
    });


    return (
      <div className="field">
        <div className="control">
          <div className="select is-small">
            <select id ="region"
            onChange = {this.onSelectChange}
            >{regionsList})</select>
          </div>
        </div>
      </div>
    );
  }
}



