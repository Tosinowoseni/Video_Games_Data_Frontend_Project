import React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

const SuccessfulConsolesChart = (props) => {
    const [chartData, setChartData] = useState([]);

    function generateDataForChart() {
        const data = [["Platform", "Sales"], ...chartData];
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
            var result = Object.entries(props.data);
            setChartData(result);
            console.log(result);
        }
    }, [props.data]);

    //<Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    return (
        <div>
            <p>Platform By Global Sales - In Millions</p>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={generateDataForChart()}
            />
        </div>
    );
};
export default SuccessfulConsolesChart;