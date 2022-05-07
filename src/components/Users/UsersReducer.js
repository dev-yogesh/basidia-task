import { ADD_USER, GET_USERS } from './UserActions';

const initialState = {
  user: null,
  users: null,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
      };
    }

    case GET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    default:
      return state;
  }
};

export default UsersReducer;
