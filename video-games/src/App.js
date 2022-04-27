import React, { useState, useEffect } from "react";
import axios from "axios";
//Components VVV
import Header from "./Components/header";
import SuccessfulConsolesChart from "./Components/SuccesfulConsolesChart";
import Table from "./Components/Table/Table";
//Useless import VVV
import { getById, makeGetRequest } from "./services/AxiosRequests";

function App() {
    const [requestReload, setRequestReload] = useState(true);
    const [videoGames, setVideoGames] = useState([]);
    const [barChartData, setBarChartData] = useState([]);
    const [nameBarChartData, setNameBarChartData] = useState([]);

    async function getGameSalesByConsole() {
        try {
            let response = await axios.get(
                "https://localhost:7260/api/games/gamesByConsole"
            );
            console.log("Get Games Sales response: ", response.data);
            setBarChartData(response.data);
        } catch (ex) {
            console.log("Oh no something didn't work right :(", ex);
        }
    }

    //returns one game from pk !!!!!!!!!!!UNUSED!!!!!!!!!!!
    // async function getById(id) {
    //   try {
    //     let response = await axios.get(`https://localhost:7260/api/games/${id}`);
    //     console.log(response.data);
    //     setVideoGames(response.data);
    //   } catch (ex) {
    //     console.log("Oh no something didn't work right :(");
    //   }
    // }

    async function getByName(name) {
        try {
            let response = await axios.get(
                `https://localhost:7260/api/games/gamebyname/${name}`
            );
            console.log(response.data);
            setVideoGames(response.data);
            let newResponse = [];
            response.data.forEach((i) => {
                newResponse.push([i.platform, i.globalSales]);
            });
            setNameBarChartData(newResponse);
        } catch (ex) {
            console.log("Oh no something didn't work right :(");
        }
    }

    //returns all games !!!!!!!!!!!UNUSED!!!!!!!!!!!
    // async function makeGetRequest() {
    //   try {
    //     let response = await axios.get(`https://localhost:7260/api/games/`);
    //     console.log(response.data);
    //     setVideoGames(response.data);
    //   } catch (ex) {
    //     console.log("Oh no something didn't work right :(");
    //   }
    // }

    async function makeGetRequestBySearch(searchTerm) {
        try {
            let response = await axios.get(
                `https://localhost:7260/api/games/search/${searchTerm}`
            );
            console.log("This came from search bar!", response.data);
            setVideoGames(response.data);
        } catch (ex) {
            console.log("Oh no something didn't work right :(");
        }
    }

    return (
        <div>
            <Header getSearch={makeGetRequestBySearch} />
            <h2>Video Games</h2>
            <SuccessfulConsolesChart
                getData={getGameSalesByConsole}
                data={barChartData}
                nameData={nameBarChartData}
            />
            <Table videoGames={videoGames} getByName={getByName} />
        </div>
    );
}

export default App;