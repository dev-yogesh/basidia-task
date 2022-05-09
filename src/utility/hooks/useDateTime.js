import { useState, useEffect } from 'react';
import moment from 'moment';

/**
 * function to render current date and time
 * @returns
 */
export const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const refreshDateTime = () => {
    setDateTime(new Date());
  };

  useEffect(() => {
    const timer = setInterval(refreshDateTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return [moment(dateTime).format('ddd DD MMM hh:mm A')];
};
