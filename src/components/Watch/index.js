import { useState, useEffect } from 'react';
import './index.css';

function Watch() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const clock = () => {
        const date = new Date();

        const hours = ((date.getHours() + 11) % 12) + 1;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;

        setHour(hour);
        setMinute(minute);
        setSecond(second);
    };

    useEffect(() => {
        const intervalId = setInterval(clock, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="clock">
            <div className="wrap">
                <span
                    className="hour"
                    style={{ transform: `rotate(${hour}deg)` }}
                ></span>
                <span
                    className="minute"
                    style={{ transform: `rotate(${minute}deg)` }}
                ></span>
                <span
                    className="second"
                    style={{ transform: `rotate(${second}deg)` }}
                ></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}

export default Watch;
