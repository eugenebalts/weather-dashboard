import { useEffect, useState } from 'react';
import getCurrentTimeForTimezone from '../utils/getCurrentTimeForTimezone';

const UPDATE_INTERVAL_DEFAULT = 30000;

const useCurrentDate = (
  timezoneSec: number,
  updateIntervalMs: number = UPDATE_INTERVAL_DEFAULT,
) => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateCurrentDate = () => {
      setCurrentDate(getCurrentTimeForTimezone(timezoneSec));
    };

    updateCurrentDate();

    const intervalId = setInterval(updateCurrentDate, updateIntervalMs);

    return () => clearInterval(intervalId);
  }, []);

  return currentDate;
};

export default useCurrentDate;
