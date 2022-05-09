import { GET_USERS } from './userActions';

const initialState = {
  users: null,
};

/**
 * users reducer function to update state based on action type
 * @param {*} state: state
 * @param {*} action: action
 * @returns
 */
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default usersReducer;
