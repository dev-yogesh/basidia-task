export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const getWeatherData = (data) => {
  return {
    type: GET_WEATHER_DATA,
    weatherData: data?.list[0]?.main,
  };
};
