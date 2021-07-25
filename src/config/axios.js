

import axios from "axios";

export default axios.create({
    method: 'get',
    baseURL: "https://covid-api.mmediagroup.fr/v1/"
})