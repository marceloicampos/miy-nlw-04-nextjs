import { useContext } from 'react';

import { MdPlayArrow, MdClose, MdCheckCircle } from 'react-icons/md';

import { HiCheckCircle } from 'react-icons/hi';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/CountDown.module.css';

export function CountDown() {

const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
} = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
        disabled
        className={styles.countDownButton}
        >
        Ciclo Encerrado
        {/* <MdCheckCircle size={24} /> */}
        <HiCheckCircle size={30}/>
        </button>
      ) : (
        <>
          { isActive ? (
          <button
          type="button"
          className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
          onClick={resetCountDown}
        >
          Abandonar Ciclo
          {/* <img src="./icons/close.svg" alt="close icon" /> */}
          <MdClose size={30} />
        </button>
        ) : (
          <button
          type="button"
          className={styles.countDownButton}
          onClick={startCountDown}
        >
          Iniciar Ciclo
          {/* <img src="./icons/play-arrow.svg" alt="play arrow  icon" /> */}
          <MdPlayArrow size={30} />
        </button>
        ) }
        </>
      ) }
    </div>
  );
}
