import axios from "axios";
import { isLogin, getTokenfromLocalStorage } from '../utils/';

const instance = axios.create(

    {
        baseURL: `https://cors-anywhere.herokuapp.com/https://cmsnews-usermgmt.herokuapp.com/`
    }
);


if (isLogin()) {
    console.log(getTokenfromLocalStorage())
    instance.defaults.headers.common['Authorization'] =  getTokenfromLocalStorage();
} else {
    instance.defaults.headers.common['Authorization'] = null;
}

// instance.defaults.headers.common['Authorization'] = 'abcd';

// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     if (isLogin()) {
//         console.log("if");
//         // console.log(getTokenfromLocalStorage());
//         // this.setState({ authToken: getTokenfromLocalStorage() })
//         // config.headers.Authorization = getTokenfromLocalStorage();
//         config.headers.Authorization = '123455';
        
//     } else {
//         console.log("else");
//         config.headers.Authorization = 'abcd';
//     }


//     return config;
// });

export default instance;
