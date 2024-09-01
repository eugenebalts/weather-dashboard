import { WeatherIconProps } from './WeatherIcon.types';

const WeatherIcon = ({ icon, size = '60px' }: WeatherIconProps) => (
  <img
    style={{ height: size, aspectRatio: 1 }}
    alt='icon'
    src={`http://openweathermap.org/img/w/${icon}.png`}
  />
);

export default WeatherIcon;
