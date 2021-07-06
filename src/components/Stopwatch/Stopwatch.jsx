import React, { useState, useEffect } from 'react';
import { useToggle } from '../../shared/useToggle'
import Button from '../../shared/Button'

import s from './Stopwatch.module.scss';

const Stopwatch = () => {



    const [time, setTime] = useState(0);
    const [action, setAction] = useToggle();

    useEffect(() => {
        let interval = null;

        if (action) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!action) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [action]);

    const handleStop = () => {
        setAction();
        setTime(0)
    }

    return (
        <div>
            <h2 className={s.title}>Stopwatch</h2>
            <div >
                <span className={s.count}>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
                <span className={s.count}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span className={s.count}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </div>
            <div >
                {!action && (
                    <Button className={s.button} onClick={() => setAction()}>Start</Button>
                )}
                {action && <Button className={s.button} onClick={handleStop}>Stop</Button>}
                {action && (
                    <Button className={s.button} onClick={() => setAction()}>Wait</Button>
                )}
                {action && (
                    <Button className={s.button} onClick={() => setTime(0)}>Reset</Button>
                )}
            </div>
        </div>
    )
}

export default Stopwatch;
