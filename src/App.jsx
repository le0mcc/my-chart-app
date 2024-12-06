import { useState } from 'react'
import './App.css'
import React, { useEffect, useRef } from 'react';
import { BubbleChart } from './BubbleChart';
import Chart from 'chart.js/auto';

function App() {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Dynamic Charts with React and Chart.js</h1>
        <BubbleChart data={chartData} />
      </div>
    </>
  )
}

export default App
