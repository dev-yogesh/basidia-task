import axios from 'axios';
import { getWeatherData } from './weatherActions';

/**
 * async action creator function to get weather data
 * @param {*} state: state
 * @returns
 */

export const getWeatherDataRequest = (state) => {
  return async (dispatch) => {
    try {
      const options = {
        method: 'GET',
        url: process.env.REACT_APP_WEATHER_API,
        params: {
          q: state,
          units: 'metric',
        },
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        },
      };

      const { data } = await axios.request(options);
      dispatch(getWeatherData(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};
