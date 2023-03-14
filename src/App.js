import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddWatch from './components/AddWatch';
import Watch from './components/Watch';

function App() {
    return (
        <Container>
            <Row className="mt-4 mb-5">
                <Col>
                    <AddWatch />
                </Col>
            </Row>
            <Row>
                <Col
                    md={6}
                    lg={4}
                    className="d-flex justify-content-center mb-3"
                >
                    <Watch timeZone={-4} watchName={'Нью-Йорк'} />
                </Col>
                <Col
                    md={6}
                    lg={4}
                    className="d-flex justify-content-center mb-3"
                >
                    <Watch timeZone={3} watchName={'Москва'} />
                </Col>
                <Col
                    md={6}
                    lg={4}
                    className="d-flex justify-content-center mb-3"
                >
                    <Watch timeZone={0} watchName={'Лондон'} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
