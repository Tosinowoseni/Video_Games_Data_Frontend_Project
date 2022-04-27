import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccessfulConsolesChart from "./Components/SuccesfulConsolesChart";
import { getById, makeGetRequest } from "./AxiosRequests";

function App() {
    const [requestReload, setRequestReload] = useState(true);
    const [barChartData, setBarChartData] = useState([]);
    const [videoGames, setVideoGames] = useState([]);

    useEffect(() => {
        if (requestReload) {
            //makeGetRequest();
            getGameSalesByConsole();
            setRequestReload(false);
        }
    }, [requestReload]);

    //https://localhost:7260/api/games/gamesByConsole
    async function getGameSalesByConsole() {
        try {
            let response = await axios.get(
                `https://localhost:7260/api/games/gamesByConsole`
            );
            setBarChartData(response.data);
        } catch (ex) {
            console.log("Oh no something didn't work right :(");
        }
    }
    //returns one game from pk
    async function getById(id) {
        try {
            let response = await axios.get(`https://localhost:7260/api/games/${id}`);
            console.log(response.data);
            setVideoGames(response.data);
        } catch (ex) {
            console.log("Oh no something didn't work right :(");
        }
    }

    //returns all games
    async function makeGetRequest() {
        try {
            let response = await axios.get(`https://localhost:7260/api/games/`);
            console.log(response.data);
            setVideoGames(response.data);
        } catch (ex) {
            console.log("Oh no something didn't work right :(");
        }
    }

    return (
        <div>
            <h2>Video Games</h2>
            <SuccessfulConsolesChart
                chartData={barChartData}
                getRequest={getGameSalesByConsole}
            />
        </div>
    );
}

export default App;