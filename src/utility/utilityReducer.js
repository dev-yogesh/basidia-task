import { TOGGLE_DRAWER } from './utilityActions';

const initialState = {
  open: false,
};

/**
 * utility reducer function to update state based on action type
 * @param {*} state: state
 * @param {*} action: action
 * @returns
 */
const utilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return {
        ...state,
        open: action.open,
      };
    }

    default:
      return state;
  }
};

export default utilityReducer;
