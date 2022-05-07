import { GET_WEATHER_DATA } from './WeatherActions';

const initialState = {
  weatherData: null,
};

const WeatherReducer = (state = initialState, action) => {
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

export default WeatherReducer;
