import { GET_WEATHER_DATA } from './weatherActions';

const initialState = {
  weatherData: null,
};

/**
 * weather reducer function to update state based on action type
 * @param {*} state: state
 * @param {*} action: action
 * @returns
 */
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA: {
      return {
        ...state,
        weatherData: action.weatherData,
      };
    }

    default:
      return state;
  }
};

export default weatherReducer;
