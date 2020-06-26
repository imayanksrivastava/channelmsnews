import React, { Component } from "react";
import { withRouter} from "react-router-dom";

// import channelMSAPI from "../apis/channelmsApi";
// import { isLogin, logout, getTokenfromLocalStorage } from '../utils';
import {logout} from '../utils';

class Signout extends Component {
  componentDidMount = () => {
      
    logout();
    this.props.history.push('/');

    // channelMSAPI
    //   .post("users/me/logout", {token: getTokenfromLocalStorage()}
      
    //   )
    //   .then((result) => {
    //     if (result.status === 200) {
    //       this.props.onLoginSubmit(result.data.user);
    //     } else {
    //       console.log("Error from server");
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Catch");
    //   });
  };

//   class Signout extends Component {
//     componentDidMount = () => {
//         console.log(getTokenfromLocalStorage())
//       channelMSAPI
//         .get("/users/me")
//         .then((result) => {console.log(result)
//           if (result.status === 200) {
//             // this.props.onLoginSubmit(result.data.user);
//           } else {
//             console.log("Error from server");
//           }
//         })
//         .catch((e) => {
//           console.log("Catch");
//         });
//     };

  render() {
    return(

    <div></div>)
  }
}



export default withRouter(Signout);