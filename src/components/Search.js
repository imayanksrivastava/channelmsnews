import React, { Component } from "react";

export default class Search extends Component {

  state = {
    SearchText: '',
  };

    onInputChange = event => {
      this.setState({ SearchText: event.target.value });
    };

    _handleKeyDown = event => {
      if (event.key === "Enter" ) {
        this.props.onSearchSubmit(this.state.SearchText)
    }
  };

    
  render() {
    return (
      <div>
          <input 
          type="text"
          className ="input search-bar"
          name="searchText"
          placeholder="Search"
          value={this.state.SearchText}
          onChange={this.onInputChange}
          onKeyDown={this._handleKeyDown}
        ></input>
      </div>
  )
  }
}