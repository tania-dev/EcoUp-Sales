
import './Dashboard.css';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Chart from "react-google-charts";
import TopBar from '../components/TopBar/TopBar'
import MapComponent from "../components/MapComponent";
import 'leaflet/dist/leaflet.css';
import DatePicker from "react-datepicker";
import Switch from '@material-ui/core/Switch';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { Line } from 'react-chartjs-2';

function Dashboard() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [labels, setLabels] = React.useState([])
  const [dataSets, setDataSets] = React.useState([])
  const [data, setData] = React.useState([
    {
      "product": "type1",
      "data": [
        {
          "volume": 100,
          "date": "2021-06-01",
          "forecast": "FALSE"
        },
        {
          "volume": 140,
          "date": "2021-07-01",
          "forecast": "FALSE"
        },
        {
          "volume": 200,
          "date": "2021-08-01",
          "forecast": "FALSE"
        },
        {
          "volume": 400,
          "date": "2021-09-01",
          "forecast": "FALSE"
        },
        {
          "volume": 250,
          "date": "2021-10-01",
          "forecast": "FALSE"
        },
        {
          "volume": 350,
          "date": "2021-11-01",
          "forecast": "FALSE"
        },
        {
          "volume": 90,
          "date": "2021-12-01",
          "forecast": "FALSE"
        },
        {
          "volume": 0,
          "date": "2022-01-01",
          "forecast": "FALSE"
        },
        {
          "volume": 120,
          "date": "2022-02-01",
          "forecast": "FALSE"
        },
        {
          "volume": 180,
          "date": "2022-03-01",
          "forecast": "TRUE"
        },
        {
          "volume": 200,
          "date": "2022-04-01",
          "forecast": "TRUE"
        }
      ]
    }, {
      "product": "type2",
      "data": [
        {
          "volume": 200,
          "date": "2021-06-01",
          "forecast": "FALSE"
        },
        {
          "volume": 100,
          "date": "2021-07-01",
          "forecast": "FALSE"
        },
        {
          "volume": 270,
          "date": "2021-08-01",
          "forecast": "FALSE"
        },
        {
          "volume": 300,
          "date": "2021-09-01",
          "forecast": "FALSE"
        },
        {
          "volume": 210,
          "date": "2021-10-01",
          "forecast": "FALSE"
        },
        {
          "volume": 90,
          "date": "2021-11-01",
          "forecast": "FALSE"
        },
        {
          "volume": 200,
          "date": "2021-12-01",
          "forecast": "FALSE"
        },
        {
          "volume": 40,
          "date": "2022-01-01",
          "forecast": "FALSE"
        },
        {
          "volume": 210,
          "date": "2022-02-01",
          "forecast": "TRUE"
        },
        {
          "volume": 100,
          "date": "2022-03-01",
          "forecast": "TRUE"
        },
        {
          "volume": 220,
          "date": "2022-04-01",
          "forecast": "TRUE"
        }
      ]
    }
  ])
  const [productOptions, setProductOptions] = React.useState([{ value: "product 1", label: "product 1" }, { value: "product 2", label: "product 2" }])
  const data1 = {
    labels: labels,
    datasets: dataSets
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  React.useEffect(() => {

    if (data && data[0] && data[0].data && data[0].data.length > 0) {
      var labelList = []
      for (let i = 0; i < data[0].data.length; i++) {
        labelList.push(data[0].data[i].date)
      }
      setLabels(labelList)
      console.log(labels)
      var datasetlist = []
      for (let i = 0; i < data.length; i++) {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var k = 0; k < 6; k++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        let sales = []
        let forecast = []
        for(let j=0;j<data[i].data.length;j++){
          if(data[i].data[j].forecast == "FALSE"){
            sales.push(data[i].data[j].volume)
            forecast.push(null)
          }
          else{
            forecast.push(data[i].data[j].volume)
          }
        }
        for (let x = 0; x<forecast.length;x++){
          if(forecast[x]!=null){
            forecast[x-1]=sales[sales.length-1]
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
      console.log(datasetlist)
    }
  }, []);



  return (
    <section>

      <TopBar />
      <br /><br /><br />
      <Row className="row">
        <Col md={3} xs={12}>
          <Paper style={{ marginRight: -20 }} className="padd15 fullheight left-panel" elevation={0} >
            {/* <h5><b>Select Products</b></h5>
            <Select
              isMulti
              name="categories"
              id="categories"
              // onChange={e => handelChangeSelect(e)}
              options={productOptions}
              defaultValue={productOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            /> */}
            <br />
            <h5><b>Start Date</b></h5>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} style={{ width: '100%' }} />
            <br /><br />
            <h5><b>End Date</b></h5>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} style={{ width: '100%' }} />
            <br /><br />
            <Button style={{ width: '100%' }}>SOLVE</Button>
          </Paper >
        </Col>
        <Col md={9} xs={12}>
          <Paper className="padd15 fullheight" elevation={0} >
            {/* <Chart
              width={'100%'}
              height={'400px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['x', 'type 1', 'type 2'],
                ["2021-06-01", 100, 200],
                ["2021-07-01", 140, 100],
                ["2021-08-01", 200, 270],
                ["2021-09-01", 400, 300],
                ["2021-10-01", 250, 210],
                ["2021-11-01", 350, 90],
                ["2021-12-01", 90, 200],
                ["2022-01-01", 0, 40],
                ["2022-02-01", 120, 210],
                ["2022-03-01", 180, 100],
                ["2022-04-01", 200, 220],
              ]}
              options={{
                hAxis: {
                  title: 'Date',
                },
                vAxis: {
                  title: 'Sales',
                },

              }}
              rootProps={{ 'data-testid': '2' }}
            /> */}
            <Line data={data1} options={options} />
          </Paper >
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;
