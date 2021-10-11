import { Col, Container, Row } from 'reactstrap';
import './App.css';
import DoughnutChart from './Components/Graphs/Doughnut';
import PieChart from './Components/Graphs/PieChart';
import GroupedBar from "./Components/Graphs/BarGraph"
import FinancialChart from './Components/Graphs/FinancialChart';
import DuesBox from './Components/DuesBox';
import { useEffect, useState } from 'react';
function Admin() {

  const [cityWise, setCityWise] = useState([])
  const [cityWiseEmp, setCityWiseEmp] = useState([])
  const [ageWise, setAgeWise] = useState([])
  const [maritalStatus, setMaritalStatus] = useState([])
  const [yearsWise, setYearsWise] = useState([])
  const [qualificationWise, setQualificationWise] = useState([])
  const [monthlyApplicants, setMonthlyApplicants] = useState([])
  const [monthlyEmp, setMonthlyEmp] = useState([])
  const [monthlyPay, setMonthlyPay] = useState([])
  const [monthlyJobs, setMonthlyJobs] = useState([])

  useEffect(() => {
    fetch('https://khawateenrozgar.com/webapi/api/stats/Applicantstats')
      .then(res => { return res.json() })
      .then(res => {

        // console.log("dataaa", res.data)
        setCityWise(res.data.cityWiseApplicant)
        setAgeWise(res.data.ageWiseApplicant)
        setQualificationWise(res.data.qulificationWiseApplicant)
        setMaritalStatus(res.data.maritalStateWiseApplicant)
        setYearsWise(res.data.yearOfExpWiseApplicant)
        setMonthlyApplicants(res.data.monthlyApplicants)

      })

    fetch('https://khawateenrozgar.com/webapi/api/stats/Companystats')
      .then(res => { return res.json() })
      .then(res => {

        // console.log("dataaa", res.data)
        setCityWiseEmp(res.data.cityWiseCompanies)
        setMonthlyEmp(res.data.monthlyCompanies)
      })
      
      fetch('https://khawateenrozgar.com/webapi/api/stats/Paymentstats')
      .then(res => { return res.json() })
      .then(res => {
        
        setMonthlyPay(res.data.monthlyPayments)
      })
      fetch('https://khawateenrozgar.com/webapi/api/stats/Jobstats')
      .then(res => { return res.json() })
      .then(res => {
        
        setMonthlyJobs(res.data.monthlyJobs)
      })
  
  
    }, [])
  return <>

    <Container fluid={true}>
      <Row>
        <Col md="12" className="head">
          <h2>ADMIN DASHBOARD</h2>
        </Col>
      </Row>
    </Container><br></br>

    <Container>
      <Row className="upperPart">
        <Col md="6" className="chart1">
          <div className="text">
            <h2 >City Wise Employers </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "10px" }}>
            <DoughnutChart k='cityWiseEmp' cityWiseEmp={cityWiseEmp} />
          </div>
        </Col>

        <Col md="6" style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            <h2 >City Wise Applicants </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            <PieChart k='cityWise' cityWise={cityWise} />
          </div>

        </Col>

      </Row>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col md='6'>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <h2 >Age Wise </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <PieChart k='ageWise' ageWise={ageWise} />
            </div>
          </Col>
          <Col md="6" className="chart1">
            <div className="text">
              <h2 >Marital Status </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "10px" }}>
              <DoughnutChart k='marital' maritalStatus={maritalStatus} />
            </div>
          </Col>

        </Row>

      </Container>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col md='6'>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <h2 >Years of Experience</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <PieChart k="Years" yearsWise={yearsWise} />
            </div>
          </Col>
          <Col md="6" className="chart1">
            <div className="text">
              <h2 >Qualification Wise </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "10px" }}>
              <DoughnutChart k='qualification' apiData={qualificationWise} />
            </div>
          </Col>
        </Row>
      </Container>

    </Container>
    <br></br>
    <br></br>
    <Container>
      <Row>
        <Col md="12">
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            <h2 >Month Wise Employers </h2>
          </div>
          <GroupedBar k='monthlyEmp' monthlyEmp={monthlyEmp} />
        </Col>
      </Row>

    </Container>
    <br></br>
    <br></br>
    <Container>
      <Row>
        <Col md="12">
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            <h2 >Month Wise Applicants </h2>
          </div>
          <GroupedBar k='monthlyApp' monthlyApplicants={monthlyApplicants} />

        </Col>
      </Row>

      <br></br>
      <br></br>
      <Row>
        <Col md="12">
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            <h2>Month Wise Payment  </h2>
          </div>
          <GroupedBar k='Payment' monthlyPay={monthlyPay} />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col md="12">
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            <h2>Monthly Approved Job  </h2>
          </div>
          <GroupedBar k='Jobs' monthlyJobs={monthlyJobs} />
        </Col>
      </Row>
      <br></br>
      <br></br>

      <Row>
        <Col md="12" style={{}}>
          < DuesBox className="width" />
        </Col>

      </Row>

    </Container>
    <Container>

    </Container>
    <br></br>
    <br></br>
    <br></br>



  </>



}

export default Admin;
