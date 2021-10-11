import "./index.css"
import { Doughnut } from 'react-chartjs-2';



export default function DoughnutChart(props) {
    const dataLabels = []
    const dataCount = []

    
    if(props.k === 'qualification') {
        props.apiData.map(item => dataLabels.push(item.name))
        props.apiData.map(item => dataCount.push(item.count))
    }
    else if(props.k==='marital'){
        props.maritalStatus.map(item => dataLabels.push(item.name))
        props.maritalStatus.map(item => dataCount.push(item.count))
    }
    else if(props.k==='cityWiseEmp'){
        props.cityWiseEmp.map(item => dataLabels.push(item.name))
        props.cityWiseEmp.map(item => dataCount.push(item.count))

    }


    const data = {
        labels: dataLabels,
        datasets: [
            {
                label: 'No of Employers',
                data: dataCount,
                backgroundColor: [
                    '#e6d251',
                    '#8cb677',
                    '#dd6969',
                    '#58b4bb',
                    '#314e6d',
                    '#a47c48'
                ],
                borderColor: [
                    '#e6d251',
                    '#8cb677',
                    '#dd6969',
                    '#58b4bb',
                    '#314e6d',
                    '#a47c48'

                ],
                borderWidth: 3,
            },
        ],

    }


    return (
        <div className="centerDiv2">
            <Doughnut
                className="graph"
                responsive
                data={data}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 12,
                                }
                            }
                        }
                    },
                    maintainAspectRatio: true
                }}
            />
        </div>
    )
}

