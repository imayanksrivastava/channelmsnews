import React from "react";
import News from "./News";
import newsApi from "../apis/newsApi";

export default class Category extends React.PureComponent {
  state = {
    news: [],
  };

  componentDidMount = () => {
    let categoryName = this.props.match.params.CategoryName;
    console.log(this.props);
    newsApi
      .get(
        `top-headlines?country=GB&category=${categoryName}&pageSize=12&apiKey=8f47a48a41494480b72c7e5102db18ce`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.props.history.replace({
            state: { fromNav: false },
          });
          this.setState({ news: response.data.articles });
        }
      })
      .catch((error) => console.log(error));
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.props);
    let currCategory = this.props.match.params.CategoryName;
    if (this.props.location.state.fromNav === true) {
      newsApi
        .get(
          `top-headlines?country=GB&category=${currCategory}&pageSize=12&apiKey=8f47a48a41494480b72c7e5102db18ce`
        ) 

        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.props.history.replace({
              state: { fromNav: false },
            });
            this.setState({ news: response.data.articles });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    return (
      <div>
        <News news={this.state.news} />
      </div>
    );
  }
}
