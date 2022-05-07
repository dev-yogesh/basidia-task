const getDataFromLocalStorage = () => {
  localStorage.getItem('users');
};

const setDataToLocalStorage = (data) => {
  localStorage.setItem('users', data);
};
