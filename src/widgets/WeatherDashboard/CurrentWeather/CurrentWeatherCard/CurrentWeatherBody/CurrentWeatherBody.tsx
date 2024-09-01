import { FaWind, FaWater } from 'react-icons/fa';
import { WiBarometer } from 'react-icons/wi';
import { CurrentWeatherBodyProps } from '../CurrentWeatherCard.types';
import styles from './CurrentWeatherBody.module.scss';

const ICON_SIZE = '3rem';

const CurrentWeatherBody = ({ weather }: CurrentWeatherBodyProps) => {
  const bodyList = [
    {
      name: 'Humidity',
      value: `${weather.main.humidity}%`,
      icon: <FaWater size={ICON_SIZE} />,
    },
    {
      name: 'Wind Speed',
      value: `${weather.wind.speed} m/s`,
      icon: <FaWind size={ICON_SIZE} />,
    },
    {
      name: 'Pressure',
      value: `${weather.main.pressure} hPa`,
      icon: <WiBarometer size={ICON_SIZE} />,
    },
  ];

  return (
    <ul className={styles.list}>
      {bodyList.map(({ name, value, icon }) => (
        <li className={styles.item} key={name + value}>
          {icon}
          <p>{value}</p>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default CurrentWeatherBody;
