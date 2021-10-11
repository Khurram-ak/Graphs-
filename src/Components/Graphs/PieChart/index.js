import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import "./index.css"


const PieChart = (props) => {

    let objName = []
    let objCount = []

    
    if (props.k === 'cityWise') {
        props.cityWise && props.cityWise.map(item => objName.push(item.name))
        props.cityWise && props.cityWise.map(item => objCount.push(item.count))
    }
    else if (props.k === 'ageWise') {
        props.ageWise && props.ageWise.map(item => objName.push(item.name))
        props.ageWise && props.ageWise.map(item => objCount.push(item.count))
       

    }
    else if (props.k === 'Years') {
        props.yearsWise && props.yearsWise.map(item => objName.push(item.name))
        props.yearsWise && props.yearsWise.map(item => objCount.push(item.count))

    }



    const data = {
        labels: objName,
        datasets: [
            {
                label: '# of Votes',
                data: objCount,
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

    return <>

        <Pie
            data={data}
            height={280}
            width={100}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 12,
                            }
                        }
                    }
                }
            }
            }
        />
    </>
}

export default PieChart;