import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { STATE_LIST } from '../../utility/constants';
import Card from '../Card/Card';
import { getWeatherDataRequest } from './WeatherAsyncActions';
import styles from './Weather.module.css';

const Weather = ({ getWeatherData, weatherData }) => {
  const [state, setState] = useState('Karnataka');

  useEffect(() => {
    (async () => {
      try {
        await getWeatherData(state);
      } catch (error) {}
    })();
    //eslint-disable-next-line
  }, [state]);

  return (
    <div className={styles.container}>
      <h4>Weather</h4>

      <div className={styles.form_container}>
        <Card height='100%' width='100%'>
          <div>
            <div className={styles.form_content}>
              <div className={styles.input_container}>
                <label htmlFor='state'>Select State</label>
                <select
                  name='state'
                  id='state'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
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
                    {weatherData?.temp && (
                      <>
                        {Math.round(weatherData?.temp)}
                        <sup>o</sup>c
                      </>
                    )}
                  </h1>
                </div>

                <div className={styles.line}></div>

                <div className={styles.weather_info}>
                  <h6>Humidity</h6>
                  <h1>{weatherData?.humidity}</h1>
                </div>

                <div className={styles.line}></div>

                <div className={styles.weather_info}>
                  <h6>Pressure</h6>
                  <h1>{weatherData?.pressure}</h1>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weatherData: state?.weather?.weatherData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherData: async (state) => {
      try {
        return await dispatch(getWeatherDataRequest(state));
      } catch (error) {
        throw error;
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
