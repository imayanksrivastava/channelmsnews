import axios from "axios";

const instance = axios.create(

    {
        baseURL: `https://api.currentsapi.services/v1/`
    }
);



export default instance;
