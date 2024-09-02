const CELSIUS_ICON = '°C';

const formatDegrees = (valueCelsius: number) => Math.floor(valueCelsius) + CELSIUS_ICON;

export default formatDegrees;
