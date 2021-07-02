
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
import { Select } from 'antd';
import { Checkbox } from 'antd';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;
function Dashboard() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [labels, setLabels] = React.useState([])
  const [dataSets, setDataSets] = React.useState([])
  const [forecastUnit, setForecastUnit] = React.useState(null)
  const [barData, setBarData] = React.useState([])
  const { Option } = Select;


  function handleChange(value) {
    setForecastUnit(value)
  }
  let history = useHistory();
  const [data, setData] = React.useState([
    {
      "product": "py",
      "tab": "Annual Sales",
      "unit": "Amount",
      "subcategory": "None",
      "trend": false,
      "axis_units": "lavat",
      "chart_type": "bar",
      "data":
        [
          {
            "volume": 16051,
            "date": "2014-01-01",
            "year": 2014, "week": 1,
            "forecast": false
          },
          {
            "volume": 15457,
            "date": "2015-01-01",
            "year": 2015,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 19258,
            "date": "2016-01-01",
            "year": 2016,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 19725,
            "date": "2017-01-01",
            "year": 2017,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 21423,
            "date": "2018-01-01",
            "year": 2018,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 18598,
            "date": "2019-01-01",
            "year": 2019,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 17647,
            "date": "2020-01-01",
            "year": 2020,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 18749,
            "date": "2021-01-01",
            "year": 2021,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 18694,
            "date": "2022-01-01",
            "year": 2022,
            "week": 1,
            "forecast": true
          },
          {
            "volume": 18895,
            "date": "2023-01-01",
            "year": 2023,
            "week": 1,
            "forecast": true
          }
        ]
    },
    {
      "product": "ia",
      "tab": "Annual Sales",
      "unit": "Amount",
      "subcategory": "None",
      "trend": false,
      "axis_units": "lavat, sis puru",
      "chart_type": "bar",
      "data":
        [
          {
            "volume": 6386,
            "date": "2014-01-01",
            "year": 2014,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 6288,
            "date": "2015-01-01",
            "year": 2015, "week": 1,
            "forecast": false
          },
          {
            "volume": 5311,
            "date": "2016-01-01",
            "year": 2016,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4542,
            "date": "2017-01-01",
            "year": 2017,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4746,
            "date": "2018-01-01",
            "year": 2018,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4441,
            "date": "2019-01-01",
            "year": 2019,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4560,
            "date": "2020-01-01",
            "year": 2020,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4719,
            "date": "2021-01-01",
            "year": 2021,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4474,
            "date": "2022-01-01",
            "year": 2022,
            "week": 1,
            "forecast": true
          },
          {
            "volume": 4317,
            "date": "2023-01-01",
            "year": 2023,
            "week": 1,
            "forecast": true
          }
        ]
    },
    {
      "product": "asf.kuitu",
      "tab": "Annual Sales",
      "unit": "Amount",
      "subcategory": "None",
      "trend": false,
      "axis_units": "kg",
      "chart_type": "bar",
      "data":
        [
          {
            "volume": 0,
            "date": "2014-01-01",
            "year": 2014,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2015-01-01",
            "year": 2015,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2016-01-01",
            "year": 2016,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2017-01-01",
            "year": 2017,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 1682787,
            "date": "2018-01-01",
            "year": 2018,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 1376397,
            "date": "2019-01-01",
            "year": 2019,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 1806239,
            "date": "2020-01-01",
            "year": 2020,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 1608628,
            "date": "2021-01-01",
            "year": 2021,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 1460439,
            "date": "2022-01-01",
            "year": 2022,
            "week": 1,
            "forecast": true
          },
          {
            "volume": 1407414,
            "date": "2023-01-01",
            "year": 2023,
            "week": 1,
            "forecast": true
          }
        ]
    },
    {
      "product": "levy",
      "tab": "Annual Sales",
      "unit": "Amount",
      "subcategory": "None",
      "trend": false,
      "axis_units": "lavat",
      "chart_type": "bar",
      "data":
        [
          {
            "volume": 25057,
            "date": "2014-01-01",
            "year": 2014,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 27154,
            "date": "2015-01-01",
            "year": 2015,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 28388,
            "date": "2016-01-01",
            "year": 2016,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 29966,
            "date": "2017-01-01",
            "year": 2017,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 32709,
            "date": "2018-01-01",
            "year": 2018,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 32157,
            "date": "2019-01-01",
            "year": 2019,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 37859,
            "date": "2020-01-01",
            "year": 2020,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 43590,
            "date": "2021-01-01",
            "year": 2021,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 44810,
            "date": "2022-01-01",
            "year": 2022,
            "week": 1,
            "forecast": true
          },
          {
            "volume": 47272,
            "date": "2023-01-01",
            "year": 2023,
            "week": 1,
            "forecast": true
          }
        ]
    },
    {
      "product": "akusto",
      "tab": "Annual Sales",
      "unit": "Amount",
      "subcategory": "None",
      "trend": false,
      "axis_units": "lavat",
      "chart_type": "bar",
      "data":
        [
          {
            "volume": 0,
            "date": "2014-01-01",
            "year": 2014,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2015-01-01",
            "year": 2015,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2016-01-01",
            "year": 2016,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2017-01-01",
            "year": 2017,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2018-01-01",
            "year": 2018,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2019-01-01",
            "year": 2019,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2020-01-01",
            "year": 2020,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4871,
            "date": "2021-01-01",
            "year": 2021,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 4623,
            "date": "2022-01-01",
            "year": 2022,
            "week": 1,
            "forecast": true
          },
          {
            "volume": 4636,
            "date": "2023-01-01",
            "year": 2023,
            "week": 1,
            "forecast": true
          }
        ]
    },
    {
      "product": "py kontit",
      "tab": "Annual Sales",
      "unit": "Amount",
      "subcategory": "None",
      "trend": false,
      "axis_units": "kg",
      "chart_type": "bar",
      "data":
        [
          {
            "volume": 0,
            "date": "2014-01-01",
            "year": 2014, "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2015-01-01",
            "year": 2015,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2016-01-01",
            "year": 2016,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2017-01-01",
            "year": 2017,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2018-01-01",
            "year": 2018,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2019-01-01",
            "year": 2019,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 0,
            "date": "2020-01-01",
            "year": 2020,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 457947,
            "date": "2021-01-01",
            "year": 2021,
            "week": 1,
            "forecast": false
          },
          {
            "volume": 441527,
            "date": "2022-01-01",
            "year": 2022,
            "week": 1,
            "forecast": true
          },
          {
            "volume": 443027,
            "date": "2023-01-01",
            "year": 2023,
            "week": 1,
            "forecast": true
          }
        ]
    }
  ])
  const [productOptions, setProductOptions] = React.useState([{ value: "product 1", label: "product 1" }, { value: "product 2", label: "product 2" }])
  const [unitOptions, setUnitOptions] = React.useState([{ value: "Amount sold", label: "Amount sold" }, { value: "Revenue streams", label: "Revenue streams" }, { value: "Costs", label: "Costs" }])
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
      var bartemp = []
      for (let i = 0; i < data.length; i++) {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var k = 0; k < 6; k++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        var color2 = '#';
        for (var k = 0; k < 6; k++) {
          color2 += letters[Math.floor(Math.random() * 16)];
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
            // forecast[x - 1] = sales[sales.length - 1]
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
        bartemp.push({
          dataset: [{
            label: data[i].product,
            data: sales,
            fill: false,
            backgroundColor: color,
            borderColor: color,
          }, {
            label: data[i].product + " forecast",
            data: forecast,
            fill: false,
            backgroundColor: color2,
            borderColor: color2,
            borderDash: [10, 5]
          }],
          product: data[i].product,
        })
      }
      setBarData(bartemp)
      setDataSets(datasetlist)
    }
  }, []);



  return (
    <section>

      <TopBar history={history} />
      <br /><br /><br />
      <Row className="row">
        <Col md={4} xs={12}>
          <Paper style={{ marginRight: -20 }} className="padd15 fullheight left-panel" elevation={0} >
            <Tabs defaultActiveKey="1">
              <TabPane tab="Annual Sales" key="1">
                <br />
                <Button style={{ width: '100%' }}>SOLVE</Button>
                <br /> <br />
                <Row>
                  <Col xs={6}>
                    <h5><b>Products:</b></h5>
                    <Checkbox defaultChecked={true}>Py</Checkbox><br />
                    <Checkbox defaultChecked={true}>Ai</Checkbox><br />
                    <Checkbox defaultChecked={true}>Asf.kuito</Checkbox><br />
                    <Checkbox defaultChecked={true}>Levy</Checkbox><br />
                    <Checkbox defaultChecked={true}>Akusto</Checkbox><br />
                    <Checkbox defaultChecked={true}>Py kontit</Checkbox>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Forecasting" key="2">
                <br />
                <h5><b>Start Date</b></h5>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} style={{ width: '100%' }} />
                <br /><br />
                <h5><b>End Date</b></h5>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} style={{ width: '100%' }} />
                <br /><br />
                <h5><b>Units</b></h5>
                <Select onChange={handleChange} defaultValue="Amount sold" style={{ width: "100%" }}>
                  <Option value="Amount sold">Amount sold</Option>
                  <Option value="Revene streams">Revene streams</Option>
                  <Option value="Costs">Costs</Option>
                </Select>
                <br /><br />
                <Button style={{ width: '100%' }}>SOLVE</Button>
                <br /> <br />
                <Row>
                  <Col xs={6}>
                    <h5><b>Products:</b></h5>
                    <Checkbox defaultChecked={true}>Py</Checkbox><br />
                    <Checkbox defaultChecked={true}>Ai</Checkbox><br />
                    <Checkbox defaultChecked={true}>Asf.kuito</Checkbox><br />
                    <Checkbox defaultChecked={true}>Levy</Checkbox><br />
                    <Checkbox defaultChecked={true}>Akusto</Checkbox><br />
                    <Checkbox defaultChecked={true}>Py kontit</Checkbox>
                  </Col>
                  <Col xs={6}>
                    <h5><b>&nbsp;</b></h5>
                    <Checkbox>Show monthly data</Checkbox><br />
                    <Checkbox>Show plots together</Checkbox><br />
                    <Checkbox>Show data trends</Checkbox><br />
                    <Checkbox>Show bar chart</Checkbox>
                  </Col>
                  <Col xs={12}>
                    <br />
                    <h6><b>{forecastUnit}</b></h6>
                    {
                      forecastUnit == "Revene streams" &&
                      <div>
                        <Checkbox defaultChecked={true}>Total</Checkbox><br />
                        <Checkbox>Professional</Checkbox><br />
                        <Checkbox>Retail</Checkbox><br />
                        <Checkbox>house manufacturer</Checkbox><br />
                        <Checkbox>consumer</Checkbox><br />
                        <Checkbox>export</Checkbox><br />
                        <Checkbox>contractor</Checkbox><br />
                        <Checkbox>infra</Checkbox><br />
                        <Checkbox>expert</Checkbox><br />
                        <Checkbox>Other</Checkbox><br />
                      </div>
                    }
                    {
                      forecastUnit == "Costs" &&
                      <div>
                        <Checkbox defaultChecked={true}>Total</Checkbox><br />
                        <Checkbox>labor</Checkbox><br />
                        <Checkbox>paper</Checkbox><br />
                        <Checkbox>chemicals</Checkbox><br />
                        <Checkbox>freight</Checkbox><br />
                        <Checkbox>installation (yrittäjät)</Checkbox><br />
                        <Checkbox>installation (oma asennus)</Checkbox><br />
                        <Checkbox>installation (konttiautot)</Checkbox><br />
                        <Checkbox>Other</Checkbox><br />
                      </div>
                    }
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Sales/Costs" key="3">

                <h5><b>Units</b></h5>
                <Select onChange={handleChange} defaultValue="Amount sold" style={{ width: "100%" }}>
                  <Option value="Amount sold">Amount sold</Option>
                  <Option value="Revene streams">Revene streams</Option>
                  <Option value="Costs">Costs</Option>
                </Select>
                <br /><br />
                <Button style={{ width: '100%' }}>SOLVE</Button>
                <br /> <br />
                <Row>
                  <Col xs={6}>
                    <h5><b>Products:</b></h5>
                    <Checkbox defaultChecked={true}>Py</Checkbox><br />
                    <Checkbox defaultChecked={true}>Ai</Checkbox><br />
                    <Checkbox defaultChecked={true}>Asf.kuito</Checkbox><br />
                    <Checkbox defaultChecked={true}>Levy</Checkbox><br />
                    <Checkbox defaultChecked={true}>Akusto</Checkbox><br />
                    <Checkbox defaultChecked={true}>Py kontit</Checkbox>
                  </Col>
                  <Col xs={6}>
                    <h5><b>&nbsp;</b></h5>
                    <Checkbox>Show plots together</Checkbox><br />
                    <Checkbox>Show bar chart</Checkbox>
                  </Col>
                  <Col xs={12}>
                    <br />
                    <h6><b>{forecastUnit}</b></h6>
                    {
                      forecastUnit == "Revene streams" &&
                      <div>
                        <Checkbox defaultChecked={true}>Total</Checkbox><br />
                        <Checkbox>Professional</Checkbox><br />
                        <Checkbox>Retail</Checkbox><br />
                        <Checkbox>house manufacturer</Checkbox><br />
                        <Checkbox>consumer</Checkbox><br />
                        <Checkbox>export</Checkbox><br />
                        <Checkbox>contractor</Checkbox><br />
                        <Checkbox>infra</Checkbox><br />
                        <Checkbox>expert</Checkbox><br />
                        <Checkbox>Other</Checkbox><br />
                      </div>
                    }
                    {
                      forecastUnit == "Costs" &&
                      <div>
                        <Checkbox defaultChecked={true}>Total</Checkbox><br />
                        <Checkbox>labor</Checkbox><br />
                        <Checkbox>paper</Checkbox><br />
                        <Checkbox>chemicals</Checkbox><br />
                        <Checkbox>freight</Checkbox><br />
                        <Checkbox>installation (yrittäjät)</Checkbox><br />
                        <Checkbox>installation (oma asennus)</Checkbox><br />
                        <Checkbox>installation (konttiautot)</Checkbox><br />
                        <Checkbox>Other</Checkbox><br />
                      </div>
                    }
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Goals" key="4">
                <Row>
                  <Col xs={6}>
                    <h6><b>Year: 2021</b></h6>
                  </Col>
                  <Col xs={6}>
                    <h6><b>Week: 22</b></h6>
                  </Col>
                </Row>
                <br />
                <h5><b>Number of rows</b></h5>
                <Input placeholder="Number of rows" defaultValue="5" />
                <br /><br />
                <Button style={{ width: '100%' }}>SOLVE</Button>
                <br /><br />
                <Row>
                  <Col xs={6}>
                    <h5><b>Products:</b></h5>
                    <Checkbox defaultChecked={true}>Py</Checkbox><br />
                    <Checkbox defaultChecked={true}>Ai</Checkbox><br />
                    <Checkbox defaultChecked={true}>Asf.kuito</Checkbox><br />
                    <Checkbox defaultChecked={true}>Levy</Checkbox><br />
                    <Checkbox defaultChecked={true}>Akusto</Checkbox><br />
                    <Checkbox defaultChecked={true}>Py kontit</Checkbox>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>

          </Paper >
        </Col>
        <Col md={8} xs={12}>
          <Paper className="padd15 fullheight" elevation={0} >
            {barData && barData.length > 0 &&
              barData.map((item, key) => (
                <Bar data={{ labels: labels, datasets: item.dataset }} options={options} />
              ))
            }

          </Paper >
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;
