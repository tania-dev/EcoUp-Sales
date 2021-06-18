
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


function Dashboard() {

  const [data, setData] = React.useState([
    {
      "product": "type1",
      "volume": 100,
      "date": "2021-06-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 140,
      "date": "2021-07-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 200,
      "date": "2021-08-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 400,
      "date": "2021-09-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 250,
      "date": "2021-10-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 350,
      "date": "2021-11-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 90,
      "date": "2021-12-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 0,
      "date": "2022-01-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 120,
      "date": "2022-02-01",
      "forecast": "FALSE"
    },
    {
      "product": "type1",
      "volume": 180,
      "date": "2022-03-01",
      "forecast": "TRUE"
    },
    {
      "product": "type1",
      "volume": 200,
      "date": "2022-04-01",
      "forecast": "TRUE"
    },
    {
      "product": "type2",
      "volume": 200,
      "date": "2021-06-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 100,
      "date": "2021-07-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 270,
      "date": "2021-08-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 300,
      "date": "2021-09-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 210,
      "date": "2021-10-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 90,
      "date": "2021-11-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 200,
      "date": "2021-12-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 40,
      "date": "2022-01-01",
      "forecast": "FALSE"
    },
    {
      "product": "type2",
      "volume": 210,
      "date": "2022-02-01",
      "forecast": "TRUE"
    },
    {
      "product": "type2",
      "volume": 100,
      "date": "2022-03-01",
      "forecast": "TRUE"
    },
    {
      "product": "type2",
      "volume": 220,
      "date": "2022-04-01",
      "forecast": "TRUE"
    }
  ]);


  React.useEffect(() => {

    for(let i=0;i<data.length;i++){
      
    }
  }, []);



  return (
    <section>
      
      <TopBar />
      <br /><br /><br /><br />
      <Row className="row">
        {/* <Col md={3} xs={12}>
          <Paper className="padd15 fullheight left-panel" elevation={3} >

          </Paper >
        </Col> */}
        <Col md={12} xs={12}>
          <Paper className="padd15 fullheight" elevation={3} >
            <Chart
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
            />
          </Paper >
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;
