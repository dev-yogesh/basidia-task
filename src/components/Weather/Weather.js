import React from 'react';
import { STATE_LIST } from '../../utility/constants';
import Card from '../Card/Card';
import styles from './Weather.module.css';

const Weather = () => {
  return (
    <div className={styles.container}>
      <h4>Weather</h4>

      <div className={styles.form_container}>
        <Card height='100%' width='100%'>
          <div>
            <div className={styles.form_content}>
              <div className={styles.input_container}>
                <label htmlFor='state'>Select State</label>
                <select name='state' id='state'>
                  {STATE_LIST.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.weather_info_outer_container}>
              <div className={styles.weather_info_container}>
                <div className={styles.weather_info}>
                  <h6>Temperature</h6>
                  <h1>
                    14<sup>o</sup>c
                  </h1>
                </div>

                <div className={styles.line}></div>

                <div className={styles.weather_info}>
                  <h6>Humidity</h6>
                  <h1>69</h1>
                </div>

                <div className={styles.line}></div>

                <div className={styles.weather_info}>
                  <h6>Pressure</h6>
                  <h1>1016</h1>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Weather;
