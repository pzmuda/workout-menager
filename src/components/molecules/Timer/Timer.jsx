import { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import styles from './Timer.module.scss';

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleClick = () => {
    setRunning(!running)
  }

  const handleClear = () => {
    setTime(0)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTime}>
        <p>REST TIMER</p>
        <p>{time}</p>
      </div>
      <div className={styles.btnWrapper}>
        <Button onClick={handleClick}>{running?'STOP':'START'} TIME</Button>
        <Button onClick={handleClear}>CLEAR</Button>
      </div>
    </div>)
}

export default Timer;