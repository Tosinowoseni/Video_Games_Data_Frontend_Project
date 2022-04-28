import React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

const BestGamesYearlyChart = (props) => {
    const [chartData, setChartData] = useState([]);

    function generateDataForChart() {
        const data = [["Year", "Game"], ...chartData];
        console.log("From best game yearly:", data);
        return data;
    }

    useEffect(() => {
        props.getData();
        var result = Object.entries(props.data);
        setChartData(result);
        console.log(result);
    }, []);

    useEffect(() => {
        if (props.data) {
            console.log("before object conversion:", props.data);
            var result = Object.entries(props.data);
            setChartData(result);
            console.log("after object conversion:", result);
        }
    }, [props.data]);

    //<Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    return (
        <div>
            <p>Best Games Yearly</p>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={generateDataForChart()}
            />
        </div>
    );
};
export default BestGamesYearlyChart;
