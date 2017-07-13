import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chart from './components/Chart';

class App extends Component {
  constructor(){
      super();
      this.state = {
        chartData: {},
      };
  }

componentWillMount() {
  this.getChartData();
}

getChartData() {
  // Ajax calls here
  this.setState({
    chartData: {
      labels: ['Kiew', 'Kharkiv', 'Lwiw', 'Odessa', 'Poltava', 'Donetsk'],
      datasets: [
        {
          label: 'Population',
          data: [
            531594,
            281045,
            253060,
            206519,
            105162,
            95072,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
          ],
        }
      ]
    }
  });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Chart
        chartData={this.state.chartData}
        location="Ukraine"
        legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
