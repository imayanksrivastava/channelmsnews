import axios from "axios";
const proxyUrl = "https://cors-anywhere.herokuapp.com/"

const instance = axios.create(
    
    {
        baseURL: `https://newsapi.org/v2/`
    }
);



export default instance;
