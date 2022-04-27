import React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

const SuccessfulConsolesChart = (props) => {
    const [chartData, setChartData] = useState([]);
    const [statsChartData, setStatsChartData] = useState([]);

    function generateDataForChart() {
        if (props.nameData.length > 0) {
            const data = [["Platform", "Sales"], ...props.nameData];
            console.log("From name search:", data);
            return data;
        } else {
            const data = [["Platform", "Sales"], ...chartData];
            console.log("From normal barchart stuff:", data);
            return data;
        }
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