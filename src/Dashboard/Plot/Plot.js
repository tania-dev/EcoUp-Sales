import React from 'react'
import { Bar } from 'react-chartjs-2';

function Plot(props) {
    const [data, setData] = React.useState([props.item]);
    const [labels, setLabels] = React.useState([])
    const [dataSets, setDataSets] = React.useState([])

    const precessedData = {
        labels: labels,
        datasets: dataSets
      };

    React.useEffect(() => {
        if (data && data[0] && data[0].data && data[0].data.length > 0) {
        var labelList = []
        for (let i = 0; i < data[0].data.length; i++) {
            labelList.push(data[0].data[i].date)
        }
        setLabels(labelList)
        var datasetlist = []
        for (let i = 0; i < data.length; i++) {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var k = 0; k < 6; k++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            let sales = []
            let forecast = []
            for (let j = 0; j < data[i].data.length; j++) {
            if (data[i].data[j].forecast == false) {
                sales.push(data[i].data[j].volume)
                forecast.push(null)
            }
            else {
                forecast.push(data[i].data[j].volume)
            }
            }
            for (let x = 0; x < forecast.length; x++) {
            if (forecast[x] != null) {
                forecast[x - 1] = sales[sales.length - 1]
                break
            }

            }
            datasetlist.push(
            {
                label: data[i].product,
                data: sales,
                fill: false,
                backgroundColor: color,
                borderColor: color,
            }
            )
            datasetlist.push(
            {
                label: data[i].product + " forecast",
                data: forecast,
                fill: false,
                backgroundColor: color,
                borderColor: color,
                borderDash: [10, 5]
            }
            )
        }
        setDataSets(datasetlist)
        }
    }, []);

    const annualSales = props.showChart;

    return (
        <>
            { true &&
                <div className="annual-sales-plot">
                    <p>Product ({props.item.product})</p>
                    <Bar data={precessedData} options={props.options}/>
                </div>
            }
        </>
    )
}

export default Plot;