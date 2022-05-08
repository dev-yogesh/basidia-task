import { getDataFromLocalStorage } from '../../utility/utility';

export const GET_USERS = 'GET_USERS';

export const getUsers = (query) => {
  const usersData = getDataFromLocalStorage();
  let filteredUsers;

  if (query && usersData?.length > 0) {
    const search = new RegExp(query, 'i');
    filteredUsers = usersData.filter((user) => search.test(user.username));
  }

  return {
    type: GET_USERS,
    users: query ? filteredUsers : usersData,
  };
};
