import moment from 'moment';

/**
 * function to get data from local storage
 * @returns
 */
export const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('users'));
};

/**
 * function to set data to local storage
 * @returns
 */
export const setDataToLocalStorage = (data) => {
  if (getDataFromLocalStorage()) {
    const usersData = getDataFromLocalStorage();
    usersData.push(data);
    localStorage.setItem('users', JSON.stringify(usersData));
  } else {
    localStorage.setItem('users', JSON.stringify([data]));
  }
};

/**
 * funciton to get age from dob
 * @param {*} dob: date of birth
 * @returns
 */
export const getAge = (dob) => {
  return dob ? moment().diff(moment(dob, 'YYYY-MM-DD'), 'years') : '';
};
