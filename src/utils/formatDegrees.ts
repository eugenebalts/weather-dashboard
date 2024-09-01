const CELSIUS_TO_FAHRENHEIT_FACTOR = 1.8;
const CELSIUS_TO_FAHRENHEIT_OFFSET = 32;

const formatDegrees = (valueCelsius: number, transformToFahrenheit = false) => {
  let result: number;
  let degreesIcon: string;

  if (transformToFahrenheit) {
    result = valueCelsius * CELSIUS_TO_FAHRENHEIT_FACTOR + CELSIUS_TO_FAHRENHEIT_OFFSET;
    degreesIcon = '°F';
    degreesIcon = '°F';
  } else {
    result = valueCelsius;
    degreesIcon = '°C';
  }

  const formatedResult = Math.floor(result) + degreesIcon;

  return formatedResult;
};

export default formatDegrees;
