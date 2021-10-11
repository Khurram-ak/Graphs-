import React from 'react';
import { Line } from 'react-chartjs-2';


const data = {

    labels: ['January', 'Febuarary', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            data: [10, 23, 15, 4, 8, 11, 5, 6, 2, 7, 3, 5],
            label: 'Monthly Packages ',
            fill: false,
            backgroundColor: '#dd6969',
            borderColor: '#dd6969',
            borderWidth: 4
        },
    ],
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

const FinancialChart = () => (
    <>

        <Line data={data} options={options} />
    </>
);

export default FinancialChart;