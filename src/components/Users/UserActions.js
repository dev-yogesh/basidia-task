export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';

export const addUser = (data) => {
  return {
    type: ADD_USER,
    user: data,
  };
};

export const getUsers = (data) => {
  return {
    type: GET_USERS,
    users: data,
  };
};
