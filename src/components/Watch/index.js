import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

function Watch({ timeZone, watchName }) {
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
    });

    const clock = () => {
        const date = new Date();
        const hoursOffset = timeZone + date.getTimezoneOffset() / 60;

        const hours = ((date.getHours() + hoursOffset + 11) % 12) + 1;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;

        setTime({
            hour,
            minute,
            second,
        });
    };

    useEffect(() => {
        const intervalId = setInterval(clock, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Container>
            <Row>
                <Col md={12} className="d-flex justify-content-center mb-3">
                    <h2>{watchName}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="d-flex justify-content-center mb-3">
                    <div className="clock simple show">
                        <div className="hours-container">
                            <div
                                className="hours"
                                style={{ transform: `rotate(${time.hour}deg)` }}
                            ></div>
                        </div>
                        <div className="minutes-container">
                            <div
                                className="minutes"
                                style={{
                                    transform: `rotate(${time.minute}deg)`,
                                }}
                            ></div>
                        </div>
                        <div className="seconds-container">
                            <div
                                className="seconds"
                                style={{
                                    transform: `rotate(${time.second}deg)`,
                                }}
                            ></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Watch;
