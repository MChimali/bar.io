export const cacheBuster = (uri: string) => {
  const timeStamp = new Date();

  const buster = `${timeStamp.getFullYear()}${timeStamp.getMonth()}${timeStamp.getDay()}${timeStamp.getHours()}`;

  return `${uri}?cache=${buster}`;
};
