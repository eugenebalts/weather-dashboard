const convertUnixDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
};

export default convertUnixDate;
