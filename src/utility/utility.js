import moment from 'moment';

export const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('users'));
};

export const setDataToLocalStorage = (data) => {
  if (getDataFromLocalStorage()) {
    const usersData = getDataFromLocalStorage();
    usersData.push(data);
    localStorage.setItem('users', JSON.stringify(usersData));
  } else {
    localStorage.setItem('users', JSON.stringify([data]));
  }
};

export const getAge = (dob) => {
  return dob ? moment().diff(moment(dob, 'YYYY-MM-DD'), 'years') : '';
};
