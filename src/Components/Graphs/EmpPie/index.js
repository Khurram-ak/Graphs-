import React from 'react';
import { Pie } from 'react-chartjs-2';
import "./index.css"

const data = {
    labels: ['Graphic Designer', 'Web Developer', 'Video Editor', 'Mob App Dev', 'Backend Developer'],
    datasets: [
        {
            label: '# of Votes',
            data: [8, 12, 4, 5, 9],
            backgroundColor: [
                '#dd6969',
                '#e6d251',
                '#8cb677',
                '#58b4bb',
                '#314e6d',
            ],
            borderColor: [
                '#dd6969',
                '#e6d251',
                '#8cb677',
                '#58b4bb',
                '#314e6d',
            ],
            borderWidth: 1,
        },
    ],
};

const EmpPieChart = () => {

    return <>

        <Pie
            // className="pieChart"
            data={data}
            height={300}
            width={100}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size:12,
                            }
                        }
                    }
                }
            }
            }
        />
    </>
}

export default EmpPieChart;