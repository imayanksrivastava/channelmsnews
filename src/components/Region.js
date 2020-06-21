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

  render() {
    var regions = this.state.regions;
    var regionsList = Object.keys(regions).sort().map(function (key) {
      return <option key= {key} value={regions[key]}>{key}</option>;
    });


    return (
      <div className="field">
        <div className="control">
          <div className="select">
            <select>{regionsList})</select>
          </div>
        </div>
      </div>
    );
  }
}



