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
        console.log(response);
        if (response.status === 200) {
          this.setState({ regions: response.data.regions });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    if (this.state.regions === undefined) {
      return <div>Loading...</div>;
    }
    var regions = this.state.regions;
    var regionsList = Object.keys(regions).map(function (key) {
      return <option value={regions[key]}>{key}</option>;
    });

    console.log(regionsList);

    return (
      <div class="field">
        <div class="control has-icons-left">
          <div class="select">
            <select>{regionsList})</select>
          </div>
          <div class="icon is-small is-left">
            <i class="fas fa-globe"></i>
          </div>
        </div>
      </div>
    );
  }
}
