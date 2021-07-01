import React from 'react'
import { Bar } from 'react-chartjs-2';

function Plot(props) {
    const [data, setData] = React.useState([props.item]);
    const [labels, setLabels] = React.useState([])
    const [dataSets, setDataSets] = React.useState([])

    const processedData = {
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
                stack:'stack1',
                label: data[i].product,
                data: sales,
                fill: false,
                backgroundColor: color,
                borderColor: color,
            }
            )
            datasetlist.push(
            {
                stack:'stack1',
                label: data[i].product + " forecast",
                data: forecast,
                fill: false,
                backgroundColor: '#ccc',
                borderColor: color,
                borderDash: [10, 5]
            }
            )
        }
        setDataSets(datasetlist)
        }
    }, []);

    const annualSales = props.showChart;
    const {item} = props

    return (
        <>
            { item.product === 'py' && annualSales.py &&
                <div className="annual-sales-plot">
                    <p>Product ({item.product})</p>
                    <Bar data={processedData} options={props.options}/>
                </div>
            }
            { item.product === 'ia' && annualSales.ai &&
                <div className="annual-sales-plot">
                    <p>Product ({item.product})</p>
                    <Bar data={processedData} options={props.options}/>
                </div>
            }
            { item.product === 'asf.kuitu' && annualSales.asf &&
                <div className="annual-sales-plot">
                    <p>Product ({item.product})</p>
                    <Bar data={processedData} options={props.options}/>
                </div>
            }
            { item.product === 'levy' && annualSales.levy &&
                <div className="annual-sales-plot">
                    <p>Product ({item.product})</p>
                    <Bar data={processedData} options={props.options}/>
                </div>
            }
            { item.product === 'akusto' && annualSales.akusto &&
                <div className="annual-sales-plot">
                    <p>Product ({item.product})</p>
                    <Bar data={processedData} options={props.options}/>
                </div>
            }
            { item.product === 'py kontit' && annualSales.kontit &&
                <div className="annual-sales-plot">
                    <p>Product ({item.product})</p>
                    <Bar data={processedData} options={props.options}/>
                </div>
            }
        </>
    )
}

export default Plot;