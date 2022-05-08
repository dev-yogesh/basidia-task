import { TOGGLE_DRAWER } from './utilityActions';

const initialState = {
  open: false,
};

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
