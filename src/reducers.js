import { combineReducers } from 'redux';

import users from './components/Users/UsersReducer';
import weather from './components/Weather/WeatherReducer';

export default combineReducers({
  users,
  weather,
});
