
import './Dashboard.css';
import {useState, useEffect} from 'react';
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
import { Line } from 'react-chartjs-2';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import predefinedData from './Data';
import Plot from './Plot/Plot';
import Dummy from './Plot/DummyData'

const { TabPane } = Tabs;

function Dashboard() {
  const [dummyData, setDummyData] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [labels, setLabels] = useState([])
  const [dataSets, setDataSets] = useState([])
  const [forecastUnit, setForecastUnit] = useState(null)
  const { Option } = Select;

  function handleChange(value) {
    setForecastUnit(value)
  }

  let history = useHistory();

  const [data, setData] = useState(predefinedData);
  const [productOptions, setProductOptions] = useState([{ value: "product 1", label: "product 1" }, { value: "product 2", label: "product 2" }])
  const [unitOptions, setUnitOptions] = useState([{ value: "Amount sold", label: "Amount sold" }, { value: "Revenue streams", label: "Revenue streams" }, { value: "Costs", label: "Costs" }]);

  const data1 = {
    labels: labels,
    datasets: dataSets
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  useEffect(() => {
    setDummyData(Dummy)
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
          if (data[i].data[j].forecast == "FALSE") {
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


  const [annualSales, setAnnuals] = useState(
    {
      py: true,
      ai: true,
      asf: true,
      levy: true,
      akusto: true,
      kontit: true
    }
  );

  const [activeTab, setTab] = useState('1');

  return (
    <section>
      <TopBar history={history}/>
      <br /><br /><br />
      <Row className="row">
        <Col md={3} xs={12}>
          <Paper style={{ marginRight: -20 }} className="padd15 fullheight left-panel" elevation={0} >
            <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={activeKey => setTab(activeKey)}>

              <TabPane tab="Annual Sales" key="1">
                <Row>
                  <Col xs={6}>
                    <h5><b>Products:</b></h5>
                    <Checkbox onChange={e => setAnnuals({...annualSales, py: !annualSales.py })}
                      checked={annualSales.py}>Py</Checkbox><br />
                    <Checkbox onChange={e => setAnnuals({...annualSales, ai: !annualSales.ai })}
                      checked={annualSales.ai}>Ai</Checkbox><br/>
                    <Checkbox onChange={e => setAnnuals({...annualSales, asf: !annualSales.asf })}
                      checked={annualSales.asf}>Asf.kuito</Checkbox><br />
                    <Checkbox onChange={e => setAnnuals({...annualSales, levy: !annualSales.levy })}
                      checked={annualSales.levy}>Levy</Checkbox><br />
                    <Checkbox onChange={e => setAnnuals({...annualSales, akusto: !annualSales.akusto})}
                      checked={annualSales.akusto}>Akusto</Checkbox><br />
                    <Checkbox onChange={e => setAnnuals({...annualSales, kontit: !annualSales.kontit})}
                      checked={annualSales.kontit}>Py kontit</Checkbox>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Forecasting" key="2">
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
                    <Checkbox>Py</Checkbox><br />
                    <Checkbox>Ai</Checkbox><br />
                    <Checkbox>Asf.kuito</Checkbox><br />
                    <Checkbox>Levy</Checkbox><br />
                    <Checkbox>Akusto</Checkbox><br />
                    <Checkbox>Py kontit</Checkbox>
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
                        <Checkbox checked={true}>Total</Checkbox><br />
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
                        <Checkbox checked={true}>Total</Checkbox><br />
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
                    <Checkbox>Py</Checkbox><br />
                    <Checkbox>Ai</Checkbox><br />
                    <Checkbox>Asf.kuito</Checkbox><br />
                    <Checkbox>Levy</Checkbox><br />
                    <Checkbox>Akusto</Checkbox><br />
                    <Checkbox>Py kontit</Checkbox>
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
                        <Checkbox checked={true}>Total</Checkbox><br />
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
                        <Checkbox checked={true}>Total</Checkbox><br />
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
                <br/>
                <h5><b>Number of rows</b></h5>
                <Input placeholder="Number of rows" />
                <br /><br />
                <Button style={{ width: '100%' }}>SOLVE</Button>
                <br /><br />
                <Row>
                  <Col xs={6}>
                    <h5><b>Products:</b></h5>
                    <Checkbox>Py</Checkbox><br />
                    <Checkbox>Ai</Checkbox><br />
                    <Checkbox>Asf.kuito</Checkbox><br />
                    <Checkbox>Levy</Checkbox><br />
                    <Checkbox>Akusto</Checkbox><br />
                    <Checkbox>Py kontit</Checkbox>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>

          </Paper >
        </Col>
        <Col md={9} xs={12}>
          {activeTab && activeTab !== '1' &&
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
          }
          {
            activeTab && activeTab === '1' &&
            <Paper className="padd15 fullheight" elevation={0}>
              {
                dummyData.map(item => {
                  return <Plot key={item.product}
                      showChart={annualSales}
                      item={item}
                      options={options}
                    >
                    </Plot>
                })
              }
            </Paper>
          }
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;
