import axios from "axios";

const API_URL = "https://localhost:7260/api/games";

class Services {
    getGameSalesByConsole = () => {
        return axios.get(API_URL + "  /gamesByConsole");
    };
}

export default new Services();