import { combineReducers } from 'redux';

import users from './modules/users/usersReducer';
import weather from './modules/weather/weatherReducer';
import utility from './utility/utilityReducer';

export default combineReducers({
  users,
  weather,
  utility,
});
