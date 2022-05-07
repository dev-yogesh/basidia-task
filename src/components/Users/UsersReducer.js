import { ADD_USER, GET_USERS } from './UserActions';

const initialState = {
  user: null,
  users: null,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      console.log('add-user', action);
      return {
        ...state,
      };
    }

    case GET_USERS: {
      console.log('get-users', action);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default UsersReducer;
