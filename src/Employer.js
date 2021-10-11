import { Col, Container, Row } from 'reactstrap';
import './App.css';
import EmpPieChart from './Components/Graphs/EmpPie';


export default function Employer() {
    return <>
        <Container fluid={true}>
            <Row>
                <Col md="12" className="head">
                    <h2>EMPLOYER DASHBOARD</h2>
                </Col>
            </Row>
        </Container><br></br>

        <Container >
            <Row>
                <div className="text">
                    <h2 >Skill Wise Jobs </h2>
                </div>
                <Col className='centerDiv'>
                    <EmpPieChart />
                </Col>
            </Row>

        </Container>




    </>
}

