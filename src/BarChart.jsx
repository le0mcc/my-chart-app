import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 3],
                backgroundColor: ['red', 'blue', 'yellow'],
            },
        ],
    };

    return <Bar data={data} />;
};

export default BarChart;