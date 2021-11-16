import React, { useState } from 'react';
import { daysSteps, moneySteps } from '../../assets/constant';
import styles from './Range.module.css';

const Range = () => {
  const [state, setState] = useState({ money: 0, days: 0 });

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: getAdjustedValue(e.target.value, e.target.name),
    }));
  };

  const getAdjustedValue = (val, name) => {
    const steps = name === 'money' ? moneySteps : daysSteps;
    return steps.reduce((p, c) =>
      Math.abs(p - val) < Math.abs(c - val) ? p : c,
    );
  };

  const minMoney = moneySteps[0];
  const maxMoney = moneySteps[moneySteps.length - 1];

  const minDays = state.money >= 10000 ? daysSteps[3] : daysSteps[0];
  const maxDays =
    state.money >= 10000 ? daysSteps[daysSteps.length - 1] : daysSteps[2];

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <div className={styles.wrapperTitle}>
          <h2 className={styles.title}>Get money fast</h2>
        </div>
        <div className={styles.creditPeriod}>
          <h3 className={styles.creditPeriodTitle}>Credit amount:</h3>
          <p className={styles.money}>{state.money}</p>
        </div>

        <input
          className={styles.input}
          name="money"
          type="range"
          min={minMoney}
          max={maxMoney}
          value={state.money}
          onChange={handleChange}
        />
        <div className={styles.creditPeriod}>
          <h3 className={styles.creditPeriodTitle}>Period:</h3>
          <p className={styles.days}>{state.days}</p>
        </div>

        <input
          className={styles.input}
          name="days"
          type="range"
          min={minDays}
          max={maxDays}
          value={state.days}
          onChange={handleChange}
        />

        <a className={styles.rulBtn}>Apply for a loan</a>
      </div>
    </div>
  );
};

export default Range;
