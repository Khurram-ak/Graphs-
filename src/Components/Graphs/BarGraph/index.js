import React, { useState,useEffect} from 'react';
import { Bar } from 'react-chartjs-2';


const GroupedBar = (props) => {

    const [labels, setLabels] = useState([])
    const [temp, setTemp] = useState([])
    const [name, setName] = useState([])

    console.log(props);

    useEffect(() => {
        
        allApis()
    }, [props])

    const allApis=()=>{
        if (props.monthlyApplicants && props.k === 'monthlyApp') {
            setTemp(props.monthlyApplicants.map(item => { return item.count }))
            setLabels(props.monthlyApplicants.map(item => { return item.month }))
            setName("Number Of Applicants")
        }
        else if(props.monthlyEmp){
            setTemp(props.monthlyEmp.map(item => { return item.count }))
            setLabels(props.monthlyEmp.map(item => { return item.month }))
            setName("Number Of Employers")
            
        }
        else if (props.monthlyPay){
            setTemp(props.monthlyPay.map(item => { return item.count }))
            setLabels(props.monthlyPay.map(item => { return item.month }))
            setName("Monthly Payment")

        }
        else if (props.monthlyJobs){
            setTemp(props.monthlyJobs.map(item => { return item.count }))
            setLabels(props.monthlyJobs.map(item => { return item.month }))
            setName("Monthly Approved Jobs")

        }



    }


    const data = {
        labels: labels,
        datasets: [
            {
                label: name,
                data: temp,
                backgroundColor: props.k==="monthlyApp" ?'rgb(255, 99, 132)':props.k==="monthlyEmp"?'#008000':props.k==='Jobs'?'rgb(54, 162, 235)':'rgb(128,0,0)',
            },

        ]
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
    return <>
        <Bar data={data} options={options} />
    </>
}

export default GroupedBar;