import axios from "axios";

const instance = axios.create(
    {
        baseURL: "http://api.openweathermap.org/"
    }
);


export default instance;

